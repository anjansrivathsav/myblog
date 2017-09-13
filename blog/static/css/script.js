var bounds;
var locations;
var largeInfoWindow;
var map;
 var markers;
function initMap() {

// initializing the map with latitude and longitude positions
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.9948584, lng: 79.580594},
      zoom: 15,
