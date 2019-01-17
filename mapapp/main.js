var map;
var styles = {
  default: null,
  hide: [
    {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}]
    }
    // ,{
    //   featureType: 'transit',
    //   elementType: 'labels.icon',
    //   stylers: [{visibility: 'off'}]
    // }
  ]
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 15.9757, lng: 102.6331 },
    styles: styles['hide'],
    zoom: 6
  });

  
  url_files = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/AsiaPhotos/"
  url_meta = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/meta.json"

  var findClosestLatLon = function(photoArr, lat, ts) {
    var closestTSDiff1 = 1000000
    var returnLatLon1 = 0
    photoArr.forEach(photo => {
      var curTS = photo.photoTakenTime.timestamp
      if(curTS != ts && Math.abs(curTS - ts) < closestTSDiff1 && photo.geoData.latitude > 0 && photo.geoData.longitude > 0){
        closestTSDiff1 = Math.abs(curTS - ts)
        returnLatLon1 = lat ? photo.geoData.latitude : photo.geoData.longitude
      }
    })
    return returnLatLon1 + (1 - (2*Math.random()))/200

  }

  $.getJSON(url_meta, function (data) {
    var allPhotos = []
    allPhotos = Array.from(data.photodata)
    allPhotos.forEach(photo => {
      if(photo.geoData.latitude == 0){
        photo.geoData.latitude = findClosestLatLon(data.photodata, true, photo.photoTakenTime.timestamp)
        photo.geoData.longitude = findClosestLatLon(data.photodata, false, photo.photoTakenTime.timestamp)
        photo.geoData.guess = true
      }
      //addMarker(photo, map)
    })
    var markers = allPhotos.map(photo => {
      return addMarker(photo)
    })
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'clusterimg/m',
      gridSize: 80,
      maxZoom: 14
    });

  })


  function addMarker(jsonData, map) {
    var pic = jsonData.geoData
    var counter = 0;

    if (pic.latitude != 0) {
      var marker = new google.maps.Marker({
        position: { lat: pic.latitude, lng: pic.longitude },
        icon: 'marker.png',
        title: 'click to view image full size'
      })
      // adds listener for marker to create infowinder
      marker.addListener('mouseover', function () {
        path = url_files + jsonData.title
        imgstr = "<a href=\'" + path + "\' target=\"_blank\">  <img src=\'" + path + "\' " + "style=\'height: 250px\'" + "/> </a>"
        timestamp = jsonData.photoTakenTime.timestamp
        datetime = moment(timestamp, "X").utcOffset('+0700').format('MMMM Do YYYY, h:mm:ss a')
        contentstr = "<div style=\'margin: 0px\'> " + imgstr + "<p> " + datetime + " </p>" + " </div>"
        if(pic.guess){
          contentstr += "<div> Note: Exact location was not recorded</div>"
        }
        

        var infowindow = new google.maps.InfoWindow({
          content: contentstr,
          maxwidth: 250
        });
        infowindow.open(map, marker)
        marker.addListener('mouseout', function () {
          infowindow.close()
        })
      })
      marker.addListener('click', function () {
        window.open(path, '_blank')
        infowindow.close()
      })
      return marker      
    } 
  }

}
