 

const map = L.map('issMap');
//first making marker with custom icon 
const issIcon=L.icon({
    iconUrl: 'SpaceStation.png',
    iconSize:[60,50],
    iconAnchor: [25,16]
});

//creating map 
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileUrl, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
 
 
 const iss_api_url='https://api.wheretheiss.at/v1/satellites/25544';
 let first_time=true;
 
 async function getISSlocationData(){
                const response = await fetch(iss_api_url);
                const data=await response.json();
                const {latitude, longitude}=data;

                L.marker([latitude, longitude],{icon:issIcon}).addTo(map);
                if(first_time){
                    map.setView([latitude, longitude],3);
                    first_time=false;
                }
                

                document.getElementById('lat').textContent =latitude;
                document.getElementById('lon').textContent =longitude;
}
getISSlocationData();
