angular.module("test")
.controller("mainCtrl", function($scope) {
    $scope.test = "hi";


    jQuery(document).ready(function ($) {

        let carouselInt;
        const slideCount = $('#carousel ul li').length;
    	const slideWidth = $('#carousel ul li').width();
    	const slideHeight = $('#carousel ul li').height();
    	const sliderUlWidth = slideCount * slideWidth;
        const intervalSpeed = 3000;
        const transitionSpeed = 1000;

        const timer = function() {
            carouselInt = setInterval(function () {
                moveRight();
            }, intervalSpeed);
        }

        timer();

	    $('#carousel').css({ width: slideWidth, height: slideHeight });

	    $('#carousel ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

        $('#carousel ul li:last-child').prependTo('#carousel ul');

        function moveLeft() {
            $('#carousel ul').animate({
                left: + slideWidth
            }, transitionSpeed, function () {
                $('#carousel ul li:first-child').css('left', '');
                $('#carousel ul li:last-child').prependTo('#carousel ul');
                clearInterval(carouselInt);
                timer();
            });
        };

        function moveRight() {
            $('#carousel ul').animate({
                left: - slideWidth
            }, transitionSpeed, function () {
                $('#carousel ul li:first-child').appendTo('#carousel ul');
                $('#carousel ul li:first-child').css('left', '');
                clearInterval(carouselInt);
                timer();
            });
        };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    });
})
