angular.module("test")
.service("mapService", function() {

    const icon = './assets/img/marker.png';

    let map;
    const markers = [];


    this.initMap = () => {
        const center = {lat: 32.8061, lng: -96.7941};

        map = new google.maps.Map(document.getElementById('gmap'), {
            center,
            zoom: 11
        });

        const infowindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesService(map);

        for (let i = 0; i < places.length; i++) {
            createMarker(places[i].placeID, i * 200);
        }

        function createMarker(placeId, timeout) {
            service.getDetails({
                placeId: placeId
            }, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    window.setTimeout(function() {
                        const marker = new google.maps.Marker({
                            position: place.geometry.location,
                            map,
                            animation: google.maps.Animation.DROP,
                            icon
                        });
                        markers.push(marker);
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                'Rating: ' + place.rating + '<br>' +
                                'Phone Number: ' + place.international_phone_number + '<br>' +
                                place.formatted_address + '</div>'
                            );
                            infowindow.open(map, this);
                        });
                    }, timeout);
                }
            });
        }
    }

    const places = [
        {
            "name": "Lockhart BBQ",
            "placeID": "ChIJDziQyoWZToYRAAIV6Mf35KQ"
        },
        {
            "name": "Pecan Lodge",
            "placeID": "ChIJGXYxd92YToYR7yV_BSMQ2Xk"
        },
        {
            "name": "Peggy Sue BBQ",
            "placeID": "ChIJM5SwKAGfToYRENtzcwKeydo"
        },
        {
            "name": "Record's BBQ",
            "placeID": "ChIJO2ZLjtmZToYRajRIoko0D2U"
        },
        {
            "name": "18th and Vine",
            "placeID": "ChIJ1yMMUbSeToYRUPC-CkDXEoI"
        },
        {
            "name": "Odom's BBQ",
            "placeID": "ChIJDSYg2MGbToYR965GYtYHhNk"
        },
        {
            "name": "Aloha Hawaiian BBQ",
            "placeID": "ChIJbSsI2pmeToYR1bDLkkRXmGQ"
        },
        {
            "name": "Slow Bone",
            "placeID": "ChIJZypGDlaZToYRUjxJgKE1AFk"
        },
        {
            "name": "Bonny Bryan's Smokehouse",
            "placeID": "ChIJx05eiRucToYRH1OjrRAeVuw"
        },
        {
            "name": "Baby Back Shak",
            "placeID": "ChIJy4nGrf2YToYR8qIE3BtfVjU"
        }
    ]
})
