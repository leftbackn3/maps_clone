 

  navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy: true
  }); 
  function successLocation(position) {
    initMap({lat:position.coords.longitude, lng:position.coords.latitude})
  }
  
  function errorLocation() {
    initMap({lat:-2.24,lng: 53.48}) //{ lat: -25.344, lng: 131.036 }
  }
  
 
  // The map, centered at Uluru
  
   
    
    
    function initMap(center){
      console.log(center)
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: center,
      });
      // The marker, positioned at Location
      const marker = new google.maps.Marker({
        position: center,
        map: map,
      });
    }
