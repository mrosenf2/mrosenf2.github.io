/**
 * @typedef { import("@react-google-maps/marker-clusterer").Clusterer } Clusterer
 */

import { InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";
// @ts-ignore
import marker_icon from "./marker.png";
import "./MapMarker.css";

const url_files = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/AsiaPhotos/";

const MyInfoWindow = ({ jsonData, position, onOpen, showInfo, setShowInfo }) => {
    const [curInfoWindow, setCurInfoWindow] = useState(null);
    const pic = jsonData.geoData;
    const path = url_files + jsonData.title;
    const timestamp = jsonData.photoTakenTime.timestamp;
    const imgContent = (
        <a href={path} target="_blank" rel="noreferrer">
            <img src={path} style={{ height: "250px" }} />
        </a>
    );

    const mouseOutHandler = () => {
        console.log("mousout");
    };

    let infoContent = (
        <div className="info-content">
            {imgContent}
            <p>{timestamp}</p>
            {pic.guess && <div> Note: Exact location was not recorded</div>}
        </div>
    );

    const infoWindow = (
        <InfoWindow
            onCloseClick={() => {
                setShowInfo(false);
            }}
            options={{ maxWidth: 250 }}
            onLoad={(iw) => {
                setCurInfoWindow(iw);
                onOpen(iw);
            }}
            position={position}
        >
            {infoContent}
        </InfoWindow>
    );

    return (
        <>
            {showInfo && (
                <div
                    className={`info-window ${showInfo ? "info-shown" : "info-hidden"}`}
                    onMouseLeave={mouseOutHandler}
                    // onTransitionEnd={() => {
                    //     setShowInfo(false);
                    // }}
                >
                    {infoWindow}
                </div>
            )}
        </>
    );
};

/**
 *
 * @param {{jsonData: PhotoData, clusterer: Clusterer, onOpen: () => void}} param0
 * @returns
 */
export default function MapMarker({ jsonData, clusterer, onOpen }) {
    const [showInfo, setShowInfo] = useState(false);
    const pic = jsonData.geoData;
    const position = { lat: pic.latitude, lng: pic.longitude };
    const timestamp = jsonData.photoTakenTime.timestamp;
    const mouseOverHandler = () => {
        setShowInfo(true);
    };

    const onInfoWindowOpen = () => {};

    return (
        <Marker
            clusterer={clusterer}
            position={position}
            icon={marker_icon}
            title="click to view image full size"
            onMouseOver={mouseOverHandler}
        >
            <MyInfoWindow
                showInfo={showInfo}
                position={position}
                onOpen={onOpen}
                setShowInfo={setShowInfo}
                jsonData={jsonData}
            />
        </Marker>
    );
}
