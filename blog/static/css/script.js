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
      styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
       {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
           {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            }, {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
       
// adding the bounds
    bounds = new google.maps.LatLngBounds();

    // initializing the window
    largeInfoWindow = new google.maps.InfoWindow();
// adding the good places in the warangal to the locations with latitude and longitudes
    locations = [
        {title: 'Bhadrakali temple', location: {lat: 17.9948584, lng: 79.580594}, index: 0},
        {title: 's2 cinemas hall', location: {lat: 17.9761984, lng: 79.5983978}, index: 1},
        {title: 'Thousand pillar temple', location: {lat: 18.0037375, lng: 79.572564}, index: 2},
        {
            title: 'Mc donalds', location: {lat: 17.9962034, lng: 79.5485788}, index: 3
        },
        {
            title: 'Nit warangal', location: {lat: 17.9837335, lng: 79.5277655}, index: 4
 }];


//empty markers is created
    markers = [];
    initMarkers();
    model();
}
 // adding the markerslist to the various positions
    function initMarkers() {
        // adding the markers
        for (var i = 0; i < locations.length; i++) {
            var marker = new google.maps.Marker({
                position: locations[i].location,
                map: map,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10
                },
                title: locations[i].title,
                draggable: false,
                animation: google.maps.Animation.DROP,
                id: i
            });

            markers.push(marker);

            bounds.extend(marker.position);


            marker.addListener('click', contentpopulated);

        }
