angular.module('karakeeb').service('karakeebSrvc', ['$rootScope',
    function($rootScope) {
        'use strict';

        this.scrollTo = function($to, $duration){
            $("html, body").stop().animate({scrollTop: $to},
                {
                    duration: $duration,
                    easing: "easeInOutExpo"
                });
        }

        this.appear = function(){
            $(".animate-y, .animate-fade, .animate-h").bind('appear', function() {
                $(this).addClass("appeared");
            });
        }
    }
]);