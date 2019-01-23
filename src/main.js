import { Map } from './map';
import './styles.css';

document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map');
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    console.log("gm", googleMaps, "el", mapElement);
    Map.createMap(googleMaps, mapElement);
  });
});
