portfolio.directive('headerDir', function ($timeout) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {},
        templateUrl: './js/directives/header/header.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $(element).find(".headerWrapper a").click(function(){
                $("html, body").stop().animate({scrollTop: 0},
                    {
                        duration: 250,
                        easing: "swing"
                    });
            })
        }
    }
});