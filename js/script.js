// 

let toggleMunu = document.querySelector('.toggleMenu'),
    menuLinks = document.querySelectorAll('.navigation__item');

toggleMunu.addEventListener('click', menu);
toggleMunu.addEventListener('click', (e) => {
    e.preventDefault();
});
menuLinks.forEach(link => link.addEventListener('click', menu));

function menu(e) {
    let menu = document.querySelector('.header__menu'),
        body = document.querySelector('body');

    menu.classList.toggle('header__menu--visible');
    menu.classList.toggle('header__menu--hidden');

    body.classList.toggle('overflow-hidden');
}




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

    let coords = { 
        lat: 47.095615,
        lng: 37.546457
    }
    

    map = new google.maps.Map(document.getElementById("map"), {
      center: coords,
      zoom: 12,
    //   styles : mapStyles
    });



    marker = new google.maps.Marker({
        // position: coords,
        animation: google.maps.Animation.DROP,
        icon: 'img/favicon.png',
        map: map
    });

    infowindow  = new google.maps.InfoWindow({
        content: `35A, ул. Энгельса, 35А, Мариуполь, <b>Beetroot Academy IT HUB</b>`
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    map.addListener('click', (e) => {
        infowindow.close(map, marker);
    });
    
    // moveMarker();
}