// create map
const map = L.map('map').setView([51.505, -0.09], 13);

// add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// create and main add geolocation marker
const marker = L.marker([51.5, -0.09]).addTo(map)
const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
// draw the 2nd arrondissement
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// Pop ups
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// stand alone popup
const standAlonePopup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a random pop up.")
    .openOn(map);

// click location popup
const clickPopup = L.popup();

function onMapClick(e) {
    clickPopup
        .setLatLng(e.latlng)
        .setContent("Coordinates " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
// create red pin marker
const redMarker = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize: [38, 50],
    iconAnchor: [22, 94],
    popupAnchor: [51.492393, -0.129433],
});

L.marker([51.492393, -0.129433], {icon: redMarker}).addTo(map);

// metro station markers



