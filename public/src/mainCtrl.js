angular.module("test")
.controller("mainCtrl", function($scope, mapService) {
    $scope.array = mapService.initMap();
    $scope.test = "hi";


    jQuery(document).ready(function ($) {

        let carouselInt;
        const intervalSpeed = 6000;

        const timer = function() {
            carouselInt = setInterval(function () {
                moveRight();
            }, intervalSpeed);
        }

        timer();

        $('#carousel ul li:first-child').addClass('active').css('opacity', '1');

        function moveLeft() {
                $('#carousel ul li.active').removeClass('active').fadeTo('slow', '0');
                $('#carousel ul li:last-child').prependTo('#carousel ul');
                $('#carousel ul li:first-child').addClass('active').fadeTo('slow', '1');
                clearInterval(carouselInt);
                timer();
        };

        function moveRight() {
                $('#carousel ul li.active').appendTo('#carousel ul').removeClass('active').fadeTo('slow', '0');
                $('#carousel ul li:first-child').addClass('active').fadeTo('medium', '1');
                clearInterval(carouselInt);
                timer();
        };

        $('a.control_prev').click(function () {
            moveLeft();
        });

        $('a.control_next').click(function () {
            moveRight();
        });

    });
})
