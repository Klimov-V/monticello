var map, marker, infowindow, geocoder;
// let select = document.querySelector('#citys');

// select.addEventListener('change', (e) => {
//     // console.log(e.target.value);
//     moveMarker();
// });


// function moveMarker() {
//     geocoder.geocode( { 'address': select.value}, function(results, status) {
//         if (status == 'OK') {
//             console.log(results);
            
//           map.setCenter(results[0].geometry.location);
//           marker.setPosition(results[0].geometry.location);
//           infowindow.close(map, marker);
//           infowindow.setContent(`<b>${results[0].formatted_address}</b>`)     
//         } else {
//           alert('Geocode was not successful for the following reason: ' + status);
//         }
//     });
// }

function initMap() {

    geocoder = new google.maps.Geocoder();

    let centerCoords = { 
        lat: 40.63,
        lng: -73.9
    }
    let markerCoords = { 
        lat: 40.67,
        lng: -73.9
    }
    

    map = new google.maps.Map(document.getElementById("map"), {
      center: centerCoords,
      zoom: 12,
      styles : mapStyles
    });



    marker = new google.maps.Marker({
        position: markerCoords,
        animation: google.maps.Animation.DROP,
        icon: 'img/marker.png',
        map: map
    });

    // infowindow  = new google.maps.InfoWindow({
    //     content: `35A, ул. Энгельса, 35А, Мариуполь, <b>Beetroot Academy IT HUB</b>`
    // });

    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    // });

    // map.addListener('click', (e) => {
    //     infowindow.close(map, marker);
    // });
    
    // moveMarker();
}