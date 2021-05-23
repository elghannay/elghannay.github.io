var map;
var Markers = {};
var infowindow;
var locations = [
  [
    'Samsung Store Madeleine',
    '<strong>Samsung Store Madeleine</strong><p>5 Boulevard Malesherbes, 75008 Paris<br>10h – 20h</p>',
    48.8701925,
    2.322897600000033,
    0,
  ],
  [
    'Samsung Store Velizy',
    "<strong>Samsung Store Velizy</strong><p>CC Velizy 2 <br>2 Avenue de l'Europe <br>78140 Vélizy-Villacoublay<br>Niveau 0 Porte 3 <br>10h – 22h</p>",
    48.78126899999999,
    2.219588599999952,
    1,
  ],
];
var origin = new google.maps.LatLng(locations[0][2], locations[0][3]);

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: origin,
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  infowindow = new google.maps.InfoWindow();

  for (i = 0; i < locations.length; i++) {
    var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
    var marker = new google.maps.Marker({
      position: position,
      map: map,
    });
    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][1]);
          infowindow.setOptions({ maxWidth: 200 });
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
    Markers[locations[i][4]] = marker;
  }

  locate(0);
}

function locate(marker_id) {
  var myMarker = Markers[marker_id];
  var markerPosition = myMarker.getPosition();
  map.setCenter(markerPosition);
  google.maps.event.trigger(myMarker, 'click');
}

google.maps.event.addDomListener(window, 'load', initialize);
