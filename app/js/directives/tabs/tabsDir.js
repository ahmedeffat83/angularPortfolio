karakeeb.directive('tabsDir', function ($timeout) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {
            data: "=?"
        },
        templateUrl: './js/directives/tabs/tabs.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $timeout(function () {

                $scope.tab = 0; // set default
                $scope.setTab = function(newTab){
                    $scope.tab = newTab;
                };

                $scope.isSet = function(tabNum){
                    return $scope.tab === tabNum;
                };

                $(element).find(".indicator").each(function() {
                    var height = $(this).attr("percentage") + "%";
                    $(this).animate({
                        height: height,
                        //webkitClipPath: 'polygon(50% 5%, 0% 100%, 100% 100%)'
                    }, 2000, 'easeOutBack')
                })

            });

        }
    }
});