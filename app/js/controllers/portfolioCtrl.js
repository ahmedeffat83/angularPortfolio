portfolio.controller('portfolioCtrl', ['$scope', '$state', '$timeout',
    function($scope, $state, $timeout){

        'use strict';

        $scope.projects = [
            {
                title: "Tifli",
                client: "Dubai healthcare authority",
                year: "2016",
                output: ["Mobile application"],
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
                title: "Hayati",
                client: "Dubai healthcare authority",
                year: "2016",
                output: ["Hybrid mobile application", "Web application"],
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
                title: "Vodafone onePOS",
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
                title: "ooredoo Algeria",
                client: "ooredoo Corporate",
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
                title: "CyberBullyRadar",
                client: "noBullying.com",
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
                title: "StarWallet",
                client: "StarWallet inc.",
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            },
            {
                title: "Vodafone Egypt",
                client: "Vodafone Egypt",
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
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
                slides: ["ahmed", "mohamed", "abdo", "aziza", "mama", "baba"]
            }
        ];

}]);