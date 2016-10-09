angular.module('karakeeb').controller('workCtrl', ['$scope', '$state', '$timeout', 'karakeebSrvc',
    function($scope, $state, $timeout, karakeebSrvc){

        'use strict';


        $scope.projects = [
                {
                    title: "Tifli",
                    client: "Dubai healthcare authority",
                    year: "2016",
                    output: ["Hybrid mobile application"],
                    roles: {
                        ux: {
                            percentage: 60,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 80,
                            roleSet: ["photoshop", "illustrator"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Hayati",
                    client: "Dubai healthcare authority",
                    year: "2016",
                    output: ["Hybrid mobile application"],
                    roles: {
                        ux: {
                            percentage: 80,
                            roleSet: ["ux", "usability"]
                        },
                        fe: {
                            percentage: 40,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "OnePOS",
                    client: "Vodafone Gernamy",
                    year: "2016",
                    output: ["Web application"],
                    roles: {
                        ux: {
                            percentage: 90,
                            roleSet: ["ux, usability"]
                        },
                        ui: {
                            percentage: 70,
                            roleSet: ["illustrator"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "ooredoo.dz",
                    client: "ooredoo corporate",
                    year: "2014",
                    output: ["Online portal"],
                    roles: {
                        ux: {
                            percentage: 90,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 85,
                            roleSet: ["illustrator"]
                        },
                        fe: {
                            percentage: 70,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                /*{
                    title: "Incorta",
                    client: "Incorta inc.",
                    year: "2014",
                    output: ["iPad application", "Hybrid Web application"],
                    roles: {
                        ux: {
                            percentage: 50,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 80,
                            roleSet: ["illustrator"]
                        },
                        fe: {
                            percentage: 95,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["a", "b", "c", "d", "e"]
                },*/
                {
                    title: "HeadsUP",
                    client: "Treze Technology inc.",
                    year: "2013",
                    output: ["Web application"],
                    roles: {
                        ux: {
                            percentage: 70,
                            roleSet: ["ux"]
                        },
                        ui: {
                            percentage: 90,
                            roleSet: ["photoshop", "illustrator"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "StarWallet",
                    client: "StarWallet labs",
                    year: "2013",
                    output: ["Hybrid mobile application", "Web application"],
                    roles: {
                        ux: {
                            percentage: 70,
                            roleSet: ["ux"]
                        },
                        ui: {
                            percentage: 90,
                            roleSet: ["photoshop", "illustrator"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Vodafone.com.eg",
                    client: "Vodafone Egypt foundation",
                    year: "2012",
                    output: ["Online portal"],
                    roles: {
                        ux: {
                            percentage: 65,
                            roleSet: ["ux", "usability"]
                        },
                        ui: {
                            percentage: 90,
                            roleSet: ["photoshop"]
                        },
                        fe: {
                            percentage: 60,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Government.ae",
                    client: "UAE Government",
                    year: "2011",
                    output: ["Online portal"],
                    roles: {
                        ux: {
                            percentage: 80,
                            roleSet: ["usability"]
                        },
                        ui: {
                            percentage: 70,
                            roleSet: ["photoshop", "illustrator"]
                        },
                        fe: {
                            percentage: 40,
                            roleSet: ["nodeJs", "ionic"]
                        }
                    },
                    slides: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                }
            ];








        // General variables
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
        });

}]);