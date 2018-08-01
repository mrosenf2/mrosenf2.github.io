var map;
function geturl() {
  var largeImage = document.getElementById('image');
  var url=largeImage.getAttribute('src');
  return url
}
function initMap() {
  // console.log(fs.readdir())
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 15.9757, lng: 102.6331},
    zoom: 6
  });

  //get marker data from server

  // loop through json files in folder

  data = jQuery.getJSON('data/Asia/IMG_20180711_183536.jpg.json', function(data) {
    var pic = data.geoData
    var datetime = data.photoTakenTime.formatted
    var path = window.location.origin + '/MapApp/data/Asia/IMG_20180711_183536.jpg'
    imgstr = "<a href=\'" + path + "\' target=\"_blank\">  <img src=\'data/Asia/IMG_20180711_183536.jpg\' " + "style=\'height: 250px\'" + "/> </a>"    
    contentstr = "<div style=\'margin: 0px\'> " + imgstr + "<p> " + datetime + " </p>" + " </div>"
    var marker = new google.maps.Marker(
      {position: {lat: pic.latitude, lng: pic.longitude},
      map: map,
      title: 'click to view image full size'
    })
    var infowindow = new google.maps.InfoWindow({
      content: contentstr,
      maxwidth: 250
    });
    marker.addListener('mouseover', function() {
      infowindow.open(map, marker)
    })
    marker.addListener('click', function() {
      window.open(path, '_blank')
      infowindow.close()
    })
    marker.addListener('mouseout', function() {
      console.log('out');
      tm = setTimeout(function() {
        infowindow.close()
      }, 1000)
      marker.addListener('mouseover', function() {
        marker.remove
        clearTimeout(tm)
      })
    })

  });
}
