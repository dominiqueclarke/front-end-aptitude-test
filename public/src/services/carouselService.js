angular.module("test")
.service("carouselService", function() {

    this.initCarousel = () => {

        jQuery(document).ready( $ => {

            const intervalSpeed = 6000;
            let carouselInt;

            const timer = function() {
                carouselInt = setInterval( () => {
                    moveRight();
                }, intervalSpeed);
            }

            timer();

            $('#carousel ul li:first-child').addClass('active').css('opacity', '1');

            function moveLeft() {
                    $('#carousel ul li.active').removeClass('active').fadeTo('slow', '0');
                    $('#carousel ul li:last-child').prependTo('#carousel ul');
                    $('#carousel ul li:first-child').addClass('active').fadeTo('medium', '1');
                    clearInterval(carouselInt);
                    timer();
            };

            function moveRight() {
                    $('#carousel ul li.active').appendTo('#carousel ul').removeClass('active').fadeTo('slow', '0');
                    $('#carousel ul li:first-child').addClass('active').fadeTo('medium', '1');
                    clearInterval(carouselInt);
                    timer();
            };

            $('a.control_prev').click( () => {
                moveLeft();
            });

            $('a.control_next').click( () => {
                moveRight();
            });
        });
    }
});
