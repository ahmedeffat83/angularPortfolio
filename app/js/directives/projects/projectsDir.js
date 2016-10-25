karakeeb.directive('projectsDir',
    function ($timeout, karakeebSrvc) {
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
                karakeebSrvc.appear();
                scrolling();
            });


            var scrolling = function(){
                $(element).find(".project").each(function() {
                    //var height = $(this).attr("percentage") + "%";
                    $(this).bind('appear', function() {

                        // var eleHeight = $(this).outerHeigh();
                        // var eleTop = $(this).offset().top;

                        //var header_height = $(".headerWrapper").outerHeight();
                        //karakeebSrvc.scrollTo($(this).offset().top - header_height, 500);
                    });
                })
            }

            $scope.projectBodySwitcher = function(){
                console.warn("switcher on");
                var target = $(element).find(".projectBody");
                target.addClass("loading");
                setTimeout(function(){
                    target.addClass("flip");
                }, 2000)
            }


        }
    }
});