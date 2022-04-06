var map = L.map('map').setView([42.35189896624604, -71.06275921933733], 17.5);

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
        fillColor: "#ffb05c",
        opacity: .5,
        weight: 2,
        color: "#ffa142"
    }
}
//var request = new Request("./aed.json");

/*
// function to fetch json data
async function fetchJSON(url) {
    return fetch(url)
        .then(response => response)
        .then(data => { return data })
}
*/

async function getShp() {
    const geoJ = await shp("http://localhost:5500/combatzone_interactive/aed_shp.zip")
    return geoJ;
}


//geoJ = getShp().then((resolved => console.log(resolved)))
//console.log(geoJ)

async function getGeoJ() {
    const resolved = await getShp();
    console.log(resolved)
    return resolved;
  }
  geoJ = getGeoJ();
  console.log(geoJ)

var shp = new L.Shapefile("http://localhost:5500/combatzone_interactive/aed_shp.zip", {
    style: aedStyle
})
shp.addTo(map);

var washington_st = L.marker([42.35183320351005, -71.06281299734245]).addTo(map)
var pilgrim_theater = L.marker([42.35202919787045, -71.06276886451212]).addTo(map)
var twooclock = L.marker([42.3518885390469, -71.06267170677561]).addTo(map)

washington_st
    .bindPopup("<b>Washington St.</b><br>19whatever");

washington_st.on("click", function (event) {
    var clickedMarker = event.layer;
    replaceLeft(event, "photocombos/washingtonst.jpeg", "April 2022")
    replaceRight(event, "photocombos/washington_st.jpg", "June 1977")
})



//const response = fetch(request);
//console.log(geoJ);










