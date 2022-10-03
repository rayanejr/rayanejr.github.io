function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 43.551153, lng:  7.011752};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Cannes, France' // Title Location
    });
}

  