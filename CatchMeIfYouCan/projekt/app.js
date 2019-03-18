//aby uruchomic program należy uruchomić serwer za pomocą komendy "node server.js" w konsoli node i później w przegladarce wpisać "localhost:3000",jeżeli mapa się nie załaduje to proszę odświeżyć stronę, chat działa, choć jest kapryśny 

//////////////////////////////////////////

//sprawdzenie czy przeglądarka obsługuje geolocation, jeżeli tak to zostaje wywołana funkcja googleMap, jeżeli nie to mamy brak wsparcia 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(GoogleMap, err);
  } else {
  alert("brak wsparcia");
}
function err() {
  alert("błąd");
}
//funkcja googlemap ma za zadanie wyświetlić mape z poprawną lokalizacją wraz z markerem
function GoogleMap(position) {
    var map = new google.maps.Map(document.getElementById('map'), {
      tmpLat:position.coords.latitude,
      tmpLng:position.coords.longitude,
      zoom: 12,
      center:{lat:position.coords.latitude, lng:position.coords.longitude} 
    });
    var marker = new google.maps.Marker({
        map: map,
        position: map.center,
        animation: google.maps.Animation.DROP,
        title: "Położenie"
      });
      document.addEventListener('keydown',(e)=>{
          if(e.keyCode==37){map.tmpLng-=0.001;console.log("dziala");}
          if(e.keyCode==38){map.tmpLat+=0.001;}
          if(e.keyCode==39){map.tmpLng+=0.001;}
          if(e.keyCode==40){map.tmpLat-=0.001;}
          marker.setPosition({lat:map.tmpLat, lng:map.tmpLng});
      });
  } 
/////////////////////////////////////////////////////
//część odpowiadająca za chat
{
    var socket = io('http://localhost:3000');
    //wyświetlanie wiadomości 
    document.querySelector('#communicator').addEventListener('submit',(e)=>{
        e.preventDefault();
        let person = document.querySelector(`input[name="person"]`).value
        let message = document.querySelector(`input[name="message"]`).value
        function addMessage(message){
            document.querySelector('#sendedMessages').innerHTML += `<div class="message"> ${message.person} napisał: ${message.message}</div>`
        }
        socket.on('previousMessages', function(message){
            for(message of messages){
                addMessage(message);
            }
        });
        socket.on('receivedMessage', function(message){
            addMessage(message);
        });
        if(person.length&&message.length){
            let messageObj = {
                person:person,
                message:message,
            };
            addMessage(messageObj);
            socket.emit('sendMessage', messageObj);
        }
    })
}