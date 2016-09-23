portfolio.directive('projectsDir',
    function ($timeout, portfolioSrvc) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {
            data: "=?"
        },
        templateUrl: './js/directives/projects/projects.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $timeout(function () {
                portfolioSrvc.appear();
            });

        }
    }
});