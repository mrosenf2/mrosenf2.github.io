var map;

function initMap() {  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 15.9757, lng: 102.6331},
    zoom: 6
  });


  var metaRequest = new XMLHttpRequest();
  
  url_meta = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/meta.txt"
  url_files = "http://storage.googleapis.com/app.mrosenfeld.net/mapapp/AsiaPhotos/"
  // request metadata file
  metaRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // parse into names of individual files
      var files = this.responseText.split('\r\n')
      jsonFiles = files.filter(word => word.match(/\.*json$/))
      jpgFiles = files.filter(word => word.match(/\.*jpg$/))

      // for each JSON filename, get JSON data from server; add marker to map
      jsonFiles.forEach(function(picdata) {
        var jsonReq = new XMLHttpRequest();
        jsonReq.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            jsonResp = JSON.parse(this.responseText)
            addMarker(jsonResp, map)
          }
        }
        jsonReq.open("GET", url_files + picdata, true)
        jsonReq.send()
      })
    }
  };
  metaRequest.open("GET", url_meta, true)
  metaRequest.send()

  function addMarker(jsonData, map) {
    var pic = jsonData.geoData
    var marker = new google.maps.Marker(
      {position: {lat: pic.latitude, lng: pic.longitude},
      map: map,
      title: 'click to view image full size'
    })
    // adds listener for marker to create infowinder
    marker.addListener('mouseover', function() {
      path = baseurl + jsonData.title
      imgstr = "<a href=\'" + path + "\' target=\"_blank\">  <img src=\'" + path + "\' " + "style=\'height: 250px\'" + "/> </a>"
      timestamp = jsonData.photoTakenTime.timestamp
      datetime = moment(timestamp, "X").utcOffset('+0700').format('MMMM Do YYYY, h:mm:ss a')
      contentstr = "<div style=\'margin: 0px\'> " + imgstr + "<p> " + datetime + " </p>" + " </div>"
      var infowindow = new google.maps.InfoWindow({
        content: contentstr,
        maxwidth: 250
      });
      infowindow.open(map, marker)
      marker.addListener('mouseout', function() {
        infowindow.close()
      })
    })
    marker.addListener('click', function() {
      window.open(path, '_blank')
      infowindow.close()
    })
  }

}
