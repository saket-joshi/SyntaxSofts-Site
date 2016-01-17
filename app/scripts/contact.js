function google_maps_initialize() {
    var myLocation = { lat: 18.5599369, lng: 73.8061653 };

    var mapCanvas = document.getElementById('contact-map');
    var mapOptions = {
        center: new google.maps.LatLng(myLocation),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: 'SyntaxSofts'
    });
}