angular.module("test")
.controller("mainCtrl", function($scope, mapService, carouselService) {
    mapService.initMap();
    carouselService.initCarousel();
})
