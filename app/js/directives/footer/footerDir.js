portfolio.directive('footerDir',
    function ($timeout, portfolioSrvc) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {},
        templateUrl: './js/directives/footer/footer.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $timeout(function () {
                portfolioSrvc.appear();
            });

        }
    }
});