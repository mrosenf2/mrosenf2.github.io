var map;

function initMap() {
  // console.log(fs.readdir())
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 17.031, lng: 103.079},
    zoom: 5
  });

  //get marker data from server

  // loop through json files in folder



  data = jQuery.getJSON('MapApp/data/Asia/IMG_20180711_183536.jpg.json', function(data) {
    console.log(data)
    var pic = data.geoData
    var marker = new google.maps.Marker({position: {lat: pic.latitude, lng: pic.longitude}, map: map})
    marker.addListener('mouseover', function(event) {

      var x = event.va.clientX;
      var y = event.va.clientY;
      var img = document.createElement("img");
      var src = document.getElementById("map");
      img.src = 'MapApp/data/Asia/IMG_20180711_183536.jpg' //need to modify later
      img.id = "pic"
      img.style.display = '';
      img.style.position = 'absolute';
      img.style.left = x + 'px';
      img.style.top = y + 'px';
      img.style.width = '10%';
      src.appendChild(img)

    })
    marker.addListener('mouseout', function(event) {
      img = document.getElementById("pic");
      src = document.getElementById("map");
      src.removeChild(img)
    })

  });
}
