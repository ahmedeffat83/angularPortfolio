angular.module('karakeeb').controller('aboutCtrl', ['$scope', '$state', '$timeout', 'karakeebSrvc',
    function($scope, $state, $timeout, karakeebSrvc){

        'use strict';

        $scope.professions = [
            "Hello, this is the first sentence",
            "Second sentence",
            "Final sentence"
        ]


        var header_height = $(".headerWrapper").outerHeight();
        function fillViewport() {
            var window_height = window.innerHeight, //$(window).height(); doesn't work
                intro_height = $(".intro > .introInner").outerHeight() // isn't stable

            if (window_height - header_height > intro_height) {
                $(".intro")
                    .css({"height": window_height - header_height})
                    .addClass("fittedHeight");
            } else {
                $(".intro")
                    .css({"height": "auto"})
                    .removeClass("fittedHeight");
            }
        };

        $scope.slideDown = function() {
            karakeebSrvc.scrollTo($(".projectsWrapper").offset().top - header_height, 500);
        }

        $(window).resize(function(){
            header_height = $(".headerWrapper").outerHeight();
            fillViewport();
        });


        // defaults
        $timeout(function(){
            $scope.scroller = true;
            fillViewport();
        });


        $scope.slideDown = function() {
            karakeebSrvc.scrollTo($(".slidingTarget").offset().top - header_height, 500);
        }


/********** circles **********/
        window.requestAnimFrame = (function(){
            return  window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        window.cancelRequestAnimFrame = ( function() {
            return window.cancelAnimationFrame         ||
                window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame    ||
                window.oCancelRequestAnimationFrame      ||
                window.msCancelRequestAnimationFrame     ||
                clearTimeout
        } )();
        var animation = function() {


            var canvas = $('canvas.circles')[0];


            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            var ctx = canvas.getContext("2d"),
                circles = [],
                w = canvas.width,
                h = canvas.height,
                opacity = 1,
                radius = 1,
                gap = 10,
                rps = Math.PI * 2

            while (opacity > 0) {
                circles.push({
                    radius: radius,
                    opacity: opacity
                });

                radius += gap;
                opacity -= 1/((w/2)/gap);
            }

            var drawCircles = function() {
                requestAnimationFrame(drawCircles);
                var smallestCircle = 0;



                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (var i = circles.length-1; i >= 0; i--) {
                    var circle = circles[i];

                    ctx.beginPath();
                    ctx.arc(w * 0.5, h * 0, circle.radius, rps , 0, true);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = 'rgba(255, 255, 255, ' + circle.opacity + ')';
                    ctx.stroke();

                    smallestCircle = circle.radius;

                    circle.opacity -= 0.00025;
                    circle.radius += 0.25;

                    if (circle.opacity <= 0) {
                        circles.pop();
                    }
                }

                if (smallestCircle === 0 || smallestCircle > gap) {
                    circles.unshift({
                        radius: 1,
                        opacity: 1
                    });
                }
            };

            requestAnimationFrame(drawCircles);
        }

        animation();

        // $(window).resize(function(){
        //     animation();
        // });
/********** ENDOF: circles **********/
    }]);