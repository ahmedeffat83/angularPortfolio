karakeeb.directive('sliderDir',
    function ($timeout, karakeebSrvc) {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {
            data: "=?"
        },
        templateUrl: './js/directives/slider/slider.html',
        link: function ($scope, element, attrs) {
            //console.log("header directive");

            $timeout(function() {

                    var $frame = $(element).find(".slides"),
                        $wrap = $frame.parent(),
                        $pages = $wrap.find(".pages");

                    var sly = new Sly($frame, {
                        horizontal: 1,
                        itemNav: 'forceCentered',
                        smart: 1,
                        activateMiddle: 1,
                        //activateOn: 'click',
                        mouseDragging: 1,
                        touchDragging: 1,
                        releaseSwing: 1,
                        startAt: 0,
                        scrollBy: 1,
                        speed: 300,
                        elasticBounds: 1,
                        dragHandle: 1,
                        dynamicHandle: 1,
                        clickBar: 1,
                        // Pages
                        pagesBar: $pages,
                        activatePageOn: 'click'

                        // Automated cycling
                        /*cycleBy: 'items',
                        cycleInterval: 5000,
                        pauseOnHover: true,
                        startPaused: true*/
                    });

                    sly.on('load', function () {});

                    var setSliderHeight = function() {
                        var ratio = 0.625,
                            $warpWidth = $wrap.outerWidth(true);
                        $wrap.height($warpWidth * ratio);
                        $frame.find(".slide").css({width: $warpWidth});
                    };

                    setSliderHeight();
                    sly.init();

                    $(window).resize(function(){
                        setSliderHeight();
                        sly.reload();
                    })




            })
        }
    }
});