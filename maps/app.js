'use strict';

let map;
const tetouan_coords = { lat: 35.56901829680258, lng: -5.382565329396667 };

const coords1 = { lat: 35.568481165601945, lng: -5.36558973486618 };
const romana = { lat: 35.56652748749029, lng: -5.392032365141779 };
const hamama = { lat: 35.57120806948491, lng: -5.387362641581646 };
const hamama2 = { lat: 35.57240152227263, lng: -5.384109145247723 };
const hamama3 = { lat: 35.56889375824745, lng: -5.378929069327894 };
const hamama4 = { lat: 35.56799084736548, lng: -5.374259345552946 };
const hamama5 = { lat: 35.567617226105604, lng: -5.371745860579674 };
const hamama6 = { lat: 35.56622650943167, lng: -5.372855876628053 };
const hamama7 = { lat: 35.566869978329144, lng: -5.3706996378589595 };
const hamama8 = { lat: 35.56763798285785, lng: -5.366527507979469 };
const hamama9 = { lat: 35.56789744218377, lng: -5.3705592909822775 };

const styles = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#add8e6' }],
    // stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];
const TETOUAN_BOUNDS = {
  north: 35.885184,
  south: 35.408338,
  east: -5.074148,
  west: -5.518035,
};

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: tetouan_coords,
    zoom: 15,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['terrain', 'hybrid'],
    },
    mapTypeId: 'hybrid',
    styles,
    restriction: {
      latLngBounds: TETOUAN_BOUNDS,
      strictBounds: false,
    },
  });
  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ['marker', 'polygon'],
    },

    markerOptions: {
      icon: './pin.svg',
    },

    polygonOptions: {
      strokeColor: '#fddb3a',
      fillOpacity: 0.2,
      strokeWeight: 1,
      draggable: true,
      editable: true,
      zIndex: 1,
      fillColor: '#FF0000',
    },
  });
  google.maps.event.addListener(drawingManager, 'overlaycomplete', function (
    event
  ) {
    if (event.type == 'marker' || event.type == 'polygon') {
      drawingManager.setDrawingMode(null);
    }
  });
  drawingManager.setMap(map);
  const image = './flash marker.svg';
  const image2 = './black.svg';
  const station = './station.svg';
  const beachMarker = new google.maps.Marker({
    position: tetouan_coords,
    map: map,
    icon: image,
  });

  const beachMarker1 = new google.maps.Marker({
    position: coords1,
    map: map,
    icon: image2,
    animation: google.maps.Animation.BOUNCE,
  });
  const beachMarker2 = new google.maps.Marker({
    position: romana,
    map: map,
    icon: station,
  });
  const beachMarker3 = new google.maps.Marker({
    position: hamama,
    map: map,
    icon: image,
  });
  const beachMarker4 = new google.maps.Marker({
    position: hamama2,
    map: map,
    icon: image,
  });
  const beachMarker5 = new google.maps.Marker({
    position: hamama3,
    map: map,
    icon: image,
  });
  const beachMarker6 = new google.maps.Marker({
    position: hamama4,
    map: map,
    icon: image,
  });
  // const beachMarker7 = new google.maps.Marker({
  //   position: hamama5,
  //   map: map,
  //   icon: image,
  // });
  // const beachMarker8 = new google.maps.Marker({
  //   position: hamama6,
  //   map: map,
  //   icon: image,
  // });
  const beachMarker9 = new google.maps.Marker({
    position: hamama7,
    map: map,
    icon: image,
  });
  const beachMarker10 = new google.maps.Marker({
    position: hamama8,
    map: map,
    icon: image,
  });
  const beachMarker11 = new google.maps.Marker({
    position: hamama9,
    map: map,
    icon: image,
  });
}

// this is so fucking awsome
