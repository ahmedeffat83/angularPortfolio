angular.module('karakeeb').controller('aboutCtrl', ['$scope', '$state', '$timeout', 'karakeebSrvc',
    function($scope, $state, $timeout, karakeebSrvc){

        'use strict';

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
        /*var requestAnimationFrame = function(callback){
         return window.setTimeout(callback, 1000 / 60);
         }*/
        var animation = function() {


            var canvas = $('canvas.circles')[0];


            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            var ctx = canvas.getContext("2d");
            var circles = [];

            var w = canvas.width;
            var h = canvas.height;
            var centerW = canvas.width*0.675;

            var opacity = 1;
            var radius = 1;
            var gap = 10;
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
                    ctx.arc(centerW, h * 0.5, circle.radius, Math.PI * 2, 0, true);
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


        /*function Animate(id, useTime){
            var can = document.getElementById(id),
                ctx = can.getContext('2d'),
                wid = can.width,
                hei = can.height,
                lst = Date.now(),
                rps = 2*Math.PI,
                step = rps/60,                       // Expecting 60fps
                ang = 0;

            (function draw(){
                var dif = Date.now() - lst;          // Milliseconds since last we drew.
                lst = Date.now();
                if (useTime) step = rps * dif/1000;  // Allows for variable fps

                ang += step;                         // Increment our placeholder. In the
                                                     // case where step is constant, this
                                                     // ends up looking "slow" when we
                                                     // have less than 60fps.

                ctx.clearRect(0,0,wid,hei);
                ctx.beginPath();
                ctx.arc(wid/2 + Math.cos(ang)*50,hei/2 + Math.sin(ang)*50,
                    10,0,2*Math.PI);
                ctx.fill();

                webkitRequestAnimationFrame(draw);
            })();
        }

        Animate('can1', false);
        Animate('can2', true);*/




    }]);