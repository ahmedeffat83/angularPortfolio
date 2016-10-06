angular.module('karakeeb').controller('aboutCtrl', ['$scope', '$state', '$timeout', 'karakeebSrvc',
    function($scope, $state, $timeout, karakeebSrvc){

        'use strict';

        $scope.professions = [
            "Experience strategist (UX)",
            "Interaction designer (IxD)",
            "Service designer",
            "Information architect (IA)",
            "Visual Design director",
            "Front-End lead developer",
            "Mobile, Social and Semantic Web consultant"
        ]

        $scope.timeline = [
            {
                title: "2016",
                positions: [
                    {
                        data: {
                            name: "IBM MEA",
                            logo: "./img/timeline/ibm.png",
                            location: "Giza, Egypt",
                            profession: "Usability/UX consultant",
                            role: "Full time",
                            start: "April 2016",
                            end: "To date"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    }
                ]
            },
            {
                title: "2015",
                positions: [
                    {
                        data: {
                            name: "Vodafone Germany",
                            logo: "./img/timeline/vodafone.png",
                            location: "Düsseldorf, Germany",
                            profession: "UX/Front-End lead developer",
                            role: "Full time",
                            start: "April 2016",
                            end: "To date"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    },
                    {
                        data: {
                            name: "iHorizons Egyptِ",
                            logo: "./img/timeline/ihorizons.png",
                            location: "Cairo, Egypt",
                            profession: "UX/Front-End lead developer",
                            role: "Full time",
                            start: "January 2015",
                            end: "July 2015"
                        },
                        category: "job",
                        alignment: "right",
                        push: true
                    }
                ]
            },
            {
                title: "2014",
                positions: [
                    {
                        data: {
                            name: "Incorta Egypt",
                            logo: "",
                            location: "Cairo, Egypt",
                            profession: "UX/Front-End designer",
                            role: "Part time",
                            start: "May 2014",
                            end: "December 2014"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    }
                ]
            },
            {
                title: "2013",
                positions: [
                    {
                        data: {
                            name: "ITWorx",
                            logo: "",
                            location: "Cairo, Egypt",
                            profession: "Interaction designer",
                            role: "Full time",
                            start: "February 2016",
                            end: "June 2014"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    },
                    {
                        data: {
                            name: "StarWallet Inc.",
                            logo: "./img/timeline/starwallet.png",
                            location: "Cairo, Egypt",
                            profession: "UX Researcher",
                            role: "Part time",
                            start: "April 2013",
                            end: "March 2014"
                        },
                        category: "job",
                        alignment: "right",
                        push: true
                    }
                ]
            },
            {
                title: "2011",
                positions: [
                    {
                        data: {
                            name: "Vodafone Egypt",
                            logo: "./img/timeline/vodafone.png",
                            location: "Giza, Egypt",
                            profession: "Interaction designer",
                            role: "Full time",
                            start: "June 2011",
                            end: "January 2013"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    }
                ]
            },
            {
                title: "2009",
                positions: [
                    {
                        data: {
                            name: "Asset Technology Group",
                            logo: "",
                            location: "Cairo, Egypt",
                            profession: "Interaction designer",
                            role: "Full time",
                            start: "August 2009",
                            end: "May 2011"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    }
                ]
            },
            {
                title: "2007",
                positions: [
                    {
                        data: {
                            name: "Elmotaheda Web",
                            logo: "",
                            location: "Cairo, Egypt",
                            profession: "UX/Interactive/Front-End developer",
                            role: "Full time",
                            start: "January 2007",
                            end: "July 2009"
                        },
                        category: "job",
                        alignment: "left",
                        push: false
                    }
                ]
            }
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

        $(window).resize(function(){
            header_height = $(".headerWrapper").outerHeight();
            fillViewport();
        });

        $scope.slideDown = function() {
            karakeebSrvc.scrollTo($(".scrollingTarget").offset().top - header_height, 500);
        }

        // defaults
        $timeout(function(){
            $scope.scroller = true;
            fillViewport();
            karakeebSrvc.appear();
        });
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