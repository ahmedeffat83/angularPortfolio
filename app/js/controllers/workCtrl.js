angular.module('karakeeb').controller('workCtrl', ['$scope', '$state', '$timeout', 'karakeebSrvc',
    function($scope, $state, $timeout, karakeebSrvc){

        'use strict';


        $scope.projects = [
                {
                    title: "Tifli v2.0",
                    client: "Dubai healthcare authority",
                    year: "2016",
                    output: ["Hybrid mobile application"],
                    logo: "./img/logos/tifli.png",
                    border: false,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
                    roles: {
                        ux: {
                            percentage: 60,
                            roleSet: ["ux", "usability"]
                        },
                        fe: {
                            percentage: 80,
                            roleSet: ["angularJs", "nodeJs", "ionic"]
                        }
                    },
                    links: {
                        android: "https://play.google.com/store/apps/details?id=ae.gov.dha.tifli&hl=en_GB",
                        apple: "https://itunes.apple.com/gb/app/tifli/id1045474741?mt=8"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Hayati v2.0",
                    client: "Dubai healthcare authority",
                    year: "2016",
                    output: ["Hybrid mobile application"],
                    logo: "./img/logos/hayati.png",
                    border: false,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    links: {
                        android: "https://play.google.com/store/apps/details?id=ae.gov.dha.hayati&hl=en_GB",
                        apple: "https://itunes.apple.com/gb/app/hayati-hyaty-diabetes-guide/id1046438276?mt=8"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Vodafone OnePOS",
                    client: "Vodafone Gernamy",
                    year: "2016",
                    output: ["Web application"],
                    logo: "./img/logos/vodafone.png",
                    border: false,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "ooredoo.dz",
                    client: "ooredoo corporate",
                    year: "2014",
                    output: ["Online portal"],
                    logo: "./img/logos/ooredoo.png",
                    border: true,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    links: {
                        url: "http://www.ooredoo.dz/"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "HeadsUP",
                    client: "Treze Technology inc.",
                    year: "2013",
                    output: ["Web application"],
                    logo: "",
                    border: true,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    links: {
                        url: "https://cyberbullyradar.com/"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "StarWallet Rewards v1.0",
                    client: "StarWallet labs",
                    year: "2013",
                    output: ["Hybrid mobile application", "Web application"],
                    logo: "./img/logos/starwallet.png",
                    border: true,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    links: {
                        url: "https://starwallet.com/",
                        android: "https://play.google.com/store/apps/details?id=com.starwallet.mainstarwalletapp&hl=en_GB",
                        apple: "https://itunes.apple.com/om/app/starwallet-rewards/id1052579512?mt=8"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Vodafone.com.eg",
                    client: "Vodafone Egypt foundation",
                    year: "2012",
                    output: ["Online portal"],
                    logo: "./img/logos/vodafone.png",
                    border: false,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    links: {
                        url: "http://www.vodafone.com.eg/"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
                },
                {
                    title: "Government.ae",
                    client: "UAE Government",
                    year: "2011",
                    output: ["Online portal"],
                    logo: "./img/logos/uae.png",
                    border: true,
                    summary: "Translating business requirements and user needs into consistent and positive User Experience",
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
                    links: {
                        url: "http://government.ae/"
                    },
                    slides: ["./img/work/tifli-1.png", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
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