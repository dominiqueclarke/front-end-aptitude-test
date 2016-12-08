angular.module("test")
.service("mapService", function() {
    let map;
    let coordinates;

    const image = './assets/img/marker.png';

    this.initMap = () => {
        const CHL = {lat: 32.8061, lng: -96.7941};

        map = new google.maps.Map(document.getElementById('map'), {
            center: CHL,
            zoom: 15
        });

        const infowindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesService(map);

        getMap(places);

        function getMap(places) {
            for (let i = 0; i < places.length; i++) {
              createMarker(places[i].placeID);
            }
        }


        function createMarker(placeId) {
            service.getDetails({
                placeId: placeId
            }, function(place, status) {
                console.log(place);
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                        const marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        icon: "./assets/img/marker.png"
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                            'Rating: ' + place.rating + '<br>' +
                            'Phone Number: ' + place.international_phone_number + '<br>' +
                            place.formatted_address + '</div>'
                        );
                        infowindow.open(map, this);
                    });
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
        }
    ]
})
