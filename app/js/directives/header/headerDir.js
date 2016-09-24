karakeeb.directive('headerDir',
    function ($timeout, karakeebSrvc) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {},
        templateUrl: './js/directives/header/header.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $(element).find(".headerWrapper a").click(function(){
                karakeebSrvc.scrollTo(0, 500);
            })
        }
    }
});