portfolio.controller('portfolioCtrl', ['$scope', '$state', '$timeout',
    function($scope, $state, $timeout){

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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
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
                slides: ["a", "b", "c", "d", "e"]
            }
        ];

}]);