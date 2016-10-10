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
                            name: "IBM Middle East & Africa",
                            logo: "./img/logos/ibm.png",
                            border: false,
                            location: "Giza, Egypt",
                            profession: "Usability/UX consultant",
                            role: "Full time",
                            start: "April 2016",
                            end: "To date"
                        },
                        responsibilities: [
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Delivering Experience Models, Personas and User Journeys, cross-platform low and high fidelity Wireframes and Interactive prototypes.",
                            "Conducting in-house research to test new solutions and concept developments. Including user requirements gathering and early stage concept and prototype testing, and other approaches to ensuring the user needs are fully understood in the service design.",
                            "Conducting in-house persona development and card sorting researches."
                        ],
                        links: {
                            url: "https://www.ibm.com/eg-en/",
                            linkedin: "https://www.linkedin.com/jobs/ibm-middle-east-and-africa-jobs?country=gb"
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
                            logo: "./img/logos/vodafone.png",
                            border: false,
                            location: "Düsseldorf, Germany",
                            profession: "UX/Front-End lead developer",
                            role: "Full time",
                            start: "August 2015",
                            end: "March 2016"
                        },
                        links: {
                            url: "https://www.vodafone.de/",
                            linkedin: "https://www.linkedin.com/company-beta/1217?pathWildcard=1217"
                        },
                        responsibilities: [
                            "Leading Single-Page Application (SPA) Development and Interaction processes, built with AngularJS.",
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Evaluating new design proposals and recommend well-structured solutions that should lead to gradually enhanced efficiency and performance.",
                            "Building low and high fidelity Wireframes, Prototypes, User Interaction Modules.",
                            "Building Cross Browser/Platform Compatible web/Hybrid applications."
                        ],
                        category: "job",
                        alignment: "left",
                        push: false
                    },
                    {
                        data: {
                            name: "iHorizons Egypt",
                            logo: "./img/logos/ihorizons.png",
                            border: false,
                            location: "Cairo, Egypt",
                            profession: "UX/Front-End lead developer",
                            role: "Full time",
                            start: "January 2015",
                            end: "July 2015"
                        },
                        links: {
                            url: "http://www.ihorizons.com/site/topics/index.asp?cu_no=2&temp_type=44",
                            linkedin: "https://www.linkedin.com/company/41607"
                        },
                        responsibilities: [
                            "Leading Oracle ADF Skinning process (Full front-end customization)",
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Validating outputs using Card Sorting, User Researches, In-Person Usability Testing and other methods.",
                            "Building low and high fidelity Wireframes, Prototypes, User Interaction Modules.",
                            "Creating each Module and Prototype with all recent Search Engine Optimization and Cross Browser Compatibility principles in mind"
                        ],
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
                            border: true,
                            location: "Cairo, Egypt",
                            profession: "UX/Front-End designer",
                            role: "Part time",
                            start: "May 2014",
                            end: "December 2014"
                        },
                        links: {
                            url: "http://incorta.com/",
                            linkedin: "https://www.linkedin.com/company/incorta"
                        },
                        responsibilities: [
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Delivering Experience Models, Personas and User Journeys, low and high fidelity Wireframes for iPad and Web versions",
                            "Conducting in-house research to test new solutions and concept developments. Including user requirements gathering and early stage concept and prototype testing, guerrilla research, and other approaches to ensuring the user needs are fully understood in the service design.",
                            "Conducting in-house persona development and card sorting researches."
                        ],
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
                            logo: "./img/logos/itworx.png",
                            border: false,
                            location: "Cairo, Egypt",
                            profession: "Interaction designer",
                            role: "Full time",
                            start: "February 2016",
                            end: "June 2014"
                        },
                        links: {
                            url: "http://www.itworx.com/",
                            linkedin: "https://www.linkedin.com/company/itworx"
                        },
                        responsibilities: [
                            "MS SharePoint custom UI development.",
                            "Single-page applications development using AngularJS and other frameworks",
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Validating outputs using Card Sorting, User Researches, In-Person Usability Testing and other methods.",
                            "Building low and high fidelity Wireframes, Prototypes, User Interaction and Animation Models using HTML[5], CSS[3] and JavaScript/jQuery.",
                            "Creating each Module and Prototype with all recent Search Engine Optimization and Cross Browser Compatibility principles in mind."
                        ],
                        category: "job",
                        alignment: "left",
                        push: false
                    },
                    {
                        data: {
                            name: "StarWallet Inc.",
                            logo: "./img/logos/starwallet.png",
                            border: true,
                            location: "Cairo, Egypt",
                            profession: "UX Researcher",
                            role: "Part time",
                            start: "April 2013",
                            end: "March 2014"
                        },
                        links: {
                            url: "https://starwallet.com/",
                            linkedin: "https://www.linkedin.com/company/starwallet"
                        },
                        responsibilities: [
                            "Conducting in-house researches to test new solutions and ongoing enhancements. Including user requirements gathering, prototype testing, guerrilla researches, personas development, card sorting researches and other approaches to ensuring the user needs are fully understood and highlighted.",
                            "Working with products' owners to devise appropriate research strategies to generate focused insights and to convert concepts into high quality stimulus material.",
                            "Evaluating new design proposals and recommend well-structured solutions that should lead to gradually enhanced efficiency and performance.",
                            "Working closely with designers and developers to turn users' data into actionable product/service requirements that feed into prototype development and influence product direction."
                        ],
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
                            logo: "./img/logos/vodafone.png",
                            border: false,
                            location: "Giza, Egypt",
                            profession: "Interaction designer",
                            role: "Full time",
                            start: "June 2011",
                            end: "January 2013"
                        },
                        links: {
                            url: "http://www.vodafone.com.eg/",
                            linkedin: "https://www.linkedin.com/company-beta/1217?pathWildcard=1217"
                        },
                        responsibilities: [
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Delivering Experience Models, Personas and User Journeys, Wireframes and Site Maps.",
                            "Building low and high fidelity Wireframes, Prototypes, User Interaction and Animation Models using HTML[5], CSS[3] and JavaScript/jQuery.",
                            "Creating each Module and Prototype with all recent Search Engine Optimization and Cross Browser Compatibility principles in mind."
                        ],
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
                            border: true,
                            location: "Cairo, Egypt",
                            profession: "Interaction designer",
                            role: "Full time",
                            start: "August 2009",
                            end: "May 2011"
                        },
                        links: {
                            url: "http://asset.com.eg/",
                            linkedin: "https://www.linkedin.com/company/315454?trk=pro_other_cmpy"
                        },
                        responsibilities: [
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Building high fidelity Wireframes, Prototypes, User Interaction and Animation Models using HTML[5], CSS[3] and JavaScript/jQuery.",
                            "Creating each Module and Prototype with all recent Search Engine Optimization and Cross Browser Compatibility principles in mind."
                        ],
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
                            border: true,
                            location: "Cairo, Egypt",
                            profession: "UX/Interactive/Front-End developer",
                            role: "Full time",
                            start: "January 2007",
                            end: "July 2009"
                        },
                        links: {
                            android: "https://play.google.com/store/apps/details?id=ae.gov.dha.hayati&hl=en_GB",
                            apple: "https://itunes.apple.com/gb/app/hayati-hyaty-diabetes-guide/id1046438276?mt=8"
                        },
                        responsibilities: [
                            "Translating business requirements and user needs into consistent and positive User Experience.",
                            "Building high fidelity Wireframes, Prototypes, User Interaction and Animation Models using HTML, CSS, JavaScript/jQuery and ActionScript 2.0",
                            "Creating each Module and Prototype with all recent Search Engine Optimization and Cross Browser Compatibility principles in mind."
                        ],
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




        $scope.slideDown = function() {
            karakeebSrvc.scrollTo($(".scrollingTarget").offset().top - header_height, 500);
        }

        $(window).resize(function(){
            header_height = $(".headerWrapper").outerHeight();
            fillViewport();
        });

        // defaults
        $timeout(function(){
            $scope.scroller = true;
            fillViewport();
            karakeebSrvc.appear();
        });
        $scope.init = function() {}





/********** circles **********/
        /*window.requestAnimFrame = (function(){
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

        animation();*/

        // $(window).resize(function(){
        //     animation();
        // });
/********** ENDOF: circles **********/
    }]);