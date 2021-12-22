import { GoogleMap, MarkerClusterer, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState, useCallback } from "react";
import MapMarker from "./MapMarker";

/** 
 * @typedef { import("@react-google-maps/marker-clusterer").ClustererOptions } ClustererOptions 
 */

const API_KEY = "AIzaSyDkW3KVPNek__Vq8Qxnnbhp8iZBzRMXMQM";

const mapStyles = {
    default: null,
    hide: [
        {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
        },
    ],
};

const center = { lat: 15.9757, lng: 102.6331 };

// const url_files = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/AsiaPhotos/";
const url_meta = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/meta.json";

/**
 * @param {PhotoData[]} photoArr
 * @param {boolean} lat
 * @param {number} ts
 */
const findClosestLatLon = (photoArr, lat, ts) => {
    var closestTSDiff1 = 1000000;
    var returnLatLon1 = 0;
    photoArr.forEach((photo) => {
        /** @type {Number} */
        const curTS = photo.photoTakenTime.timestamp;
        if (
            curTS !== ts &&
            Math.abs(curTS - ts) < closestTSDiff1 &&
            photo.geoData.latitude > 0 &&
            photo.geoData.longitude > 0
        ) {
            closestTSDiff1 = Math.abs(curTS - ts);
            returnLatLon1 = lat ? photo.geoData.latitude : photo.geoData.longitude;
        }
    });
    return returnLatLon1 + (1 - 2 * Math.random()) / 200;
};

/** @type {ClustererOptions} */
const clstrOptions = {
    imagePath: "../clusterimg/m",
    gridSize: 80,
    maxZoom: 14,
};

const mapContainerStyle = {
    height: "100%",
    width: "100%",
};

export default function MapApp() {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY,
    });

    /** @type {PhotoData[]} */
    const initPhotoData = [];

    // const [map, setMap] = useState(null);
    const [photoData, setPhotoData] = useState(initPhotoData);

    const fetchData = async () => {
        try {
            const resp = await fetch(url_meta);
            const data = await resp.json();
            console.log(data);
            /** @type {PhotoData[]} */
            const allPhotos = [...data.photodata];
            allPhotos.forEach((photo) => {
                if (photo.geoData.latitude == 0) {
                    photo.geoData.latitude = findClosestLatLon(
                        data.photodata,
                        true,
                        photo.photoTakenTime.timestamp
                    );
                    photo.geoData.longitude = findClosestLatLon(
                        data.photodata,
                        false,
                        photo.photoTakenTime.timestamp
                    );
                    photo.geoData.guess = true;
                }
            });
            setPhotoData(allPhotos);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const onLoad = useCallback((map) => {
        // setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        // setMap(null);
    }, []);

    const onOpen = (infoWindow) => {
        console.log(infoWindow);
    };

    const loading_el = <div>Loading...</div>;
    const error_el = <div>error!!</div>;
    const map_el = (
        <GoogleMap
            options={{
                styles: mapStyles["hide"],
            }}
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={6}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <MarkerClusterer options={clstrOptions}>
                {(clusterer) =>
                    photoData.map((data) => (
                        <MapMarker
                            key={data.title}
                            onOpen={onOpen}
                            jsonData={data}
                            clusterer={clusterer}
                        />
                    ))
                }
            </MarkerClusterer>
        </GoogleMap>
    );

    return loadError ? error_el : isLoaded ? map_el : loading_el;
}
