var api = "AIzaSyApIflOGw-yB86abKl11YK1ZTRDExYLV5w"


      function initMap() {
        
          var latLng ={
              lat: 16.8314102, lng: -99.904042
          }
        
      var  map = new google.maps.Map(document.getElementById('mapa'), {
          "center": latLng,
          'zoom': 17,
          "mapTypeId":google.maps.MapTypeId.ROADMAP
          
        });
          
          var contenido = "<h1>Playa</h1>" + "<h1>Caleta</h1>"
          + '<img class="featurette-image img-fluid mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Caleta_Beach_in_Acapulco%2C_Mexico_2009.jpg/245px-Caleta_Beach_in_Acapulco%2C_Mexico_2009.jpg" alt="Card image cap" >';
              
          
        var informacion = new google.maps.InfoWindow({
            content: contenido
        });
          
        var marcador = new google.maps.Marker({
            position: latLng,
            map: map,
            title:"Caleta"
            
        });
          
          marcador.addListener("click", function(){
              informacion.open(map,marcador);
          });
          
          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('calle'), {
              position: {lat: 16.8312283, lng: -99.9044189},
              addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
              },
              linksControl: false,
              panControl: false,
              enableCloseButton: false
        });
        
      }





// Stop carousel
$('.carousel').carousel({
  interval: false
});




