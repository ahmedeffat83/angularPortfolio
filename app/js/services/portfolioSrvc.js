portfolio.service('portfolioSrvc', ['$rootScope',
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
            $(".animateEle, .fadeEle").bind('appear', function() {
                $(this).addClass("appeared");
            });
        }
    }
]);