
mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNvZGVsZXNzIiwiYSI6ImNrc3pkeTd1djB5aHUybm1zeXMyOWpwdGMifQ.myWLtOR1YSIxjPq2BJPOfA';
//navigate my location
navigator.geolocation.getCurrentPosition(successLocation , errorLocation, {
     enableHighAccuracy:true
})

function successLocation(position){
   setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation(){
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
     }) 


    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken 
    });
    map.addControl(directions, 'top-left');
}


