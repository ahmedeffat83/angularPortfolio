karakeeb.directive('headerDir',
    function ($timeout, $rootScope, karakeebSrvc) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {},
        templateUrl: './js/directives/header/header.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $timeout(function () {
                $(element).find(".headerWrapper a").click(function () {
                    var eleParent = $(this).parent();
                    if(eleParent.hasClass("active")) {
                        karakeebSrvc.scrollTo(0, 500);
                    }
                })
            });
        }
    }
});