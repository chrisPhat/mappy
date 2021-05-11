document.addEventListener('DOMContentLoaded', ()=>{
    var map = L.map('map').setView([50.375651527182995, -4.1393780708313], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2hyaXNib290aHBseW11bmkiLCJhIjoiY2tvanVhY2QzMGhwbzJxcHZyenZ3c3ExZCJ9.WRN7D1Y_oyg_UUcxdSPXFg'
    }).addTo(map);

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var addLocModal = document.querySelector('#addLocModal');
    var instance = M.Modal.getInstance(addLocModal);

    map.on('click', clickedMap);

    var latField = document.querySelector('#lat');
    var lngField = document.querySelector('#lng');
    var w3wField = document.querySelector('#w3w');

    function clickedMap(event){
        instance.open();

        latField.value = event.latlng.lat;
        lngField.value = event.latlng.lng;

        fetch(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${event.latlng.lat}%2C${event.latlng.lng}&key=MONJRS11`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            w3wField.value = myJson.words;
        })

        console.log(event.latlng);
    }
});

