karakeeb.directive('typedDir', function($timeout) {
    return {
        restrict: 'E',

        scope: {
            strings: '='
        },

        template: '<span class="typed-output"></span>',

        link: function($scope, element, attrs) {

            var options = {
                strings: $scope.strings,
                typeSpeed: 0,
                backDelay: 2000,
                loop: true
            };

            $timeout(function() {
                $(element).find(".typed-output").typed(options);
            });

        }
    };
});