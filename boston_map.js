var map = L.map('map').setView([42.35154205203401, -71.0636876549353], 17.5);

// Retina displays require different mat tiles quality
var isRetina = L.Browser.retina;
var baseUrl =
    'https://maps.geoapify.com/v1/tile/osm-bright-grey/{z}/{x}/{y}.png?apiKey={api_key}';
var retinaUrl =
    'https://maps.geoapify.com/v1/tile/osm-bright-grey/{z}/{x}/{y}@2x.png?apiKey={api_key}';

L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
    maxZoom: 20, id: 'osm-bright',
    api_key: 'e7246100546c4a81903d9947391f67bb'
}).addTo(map);

function aedStyle() {
    return {
        fillColor: "rgb(0, 0, 0)",
        opacity: 0,
        color: "rgb(0, 256, 0)"
    }
}
//var request = new Request("./aed.json");


// function to fetch json data
async function fetchJSON(url) {
    return fetch(url)
        .then(response => response)
        .then(data => { return data })
}


async function main() {
    const geoJ = shp("./aed_shp.zip").then(function(geojson) {
        console.log(geoJ)
        return geojson
    })
    
    L.geoJSON(geoJ, {
        style: aedStyle
    }).addTo(map);
}
main()





//const response = fetch(request);
//console.log(geoJ);










