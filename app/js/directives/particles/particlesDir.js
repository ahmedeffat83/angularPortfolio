karakeeb.directive('particlesDir', function ($timeout, $window) {
    return {
        restrict: 'AE',
        replace: false,
        scope: {
            id : "@",
            class: "@"
        },
        /*template: '<div id="id" class="class"></div>',*/
        link: function($scope, element, attrs) {

                $window.particlesJS($scope.id, {
                    particles: {
                        number: {
                            value: 25,
                            density: {
                                enable: !0,
                                value_area: 500
                            }
                        },
                        color: {
                            value: "#fff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#fff"
                            },
                            polygon: {
                                nb_sides: 5
                            }/*,
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100
                            }*/
                        },
                        opacity: {
                            value: .75,
                            random: !1,
                            anim: {
                                enable: !1,
                                speed: .5,
                                opacity_min: .1,
                                sync: !1
                            }
                        },
                        size: {
                            value: 2.5,
                            random: !0,
                            anim: {
                                enable: !1,
                                speed: 10,
                                size_min: .1,
                                sync: !1
                            }
                        },
                        line_linked: {
                            enable: !0,
                            distance: 500,
                            color: "#fff",
                            opacity: .5,
                            width: 1
                        },
                        move: {
                            enable: !0,
                            speed: 1,
                            direction: "none",
                            random: !1,
                            straight: !1,
                            out_mode: "out",
                            bounce: !1,
                            attract: {
                                enable: !1,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: 0,
                                mode: "grab"
                            },
                            onclick: {
                                enable: 0,
                                mode: "push"
                            },
                            resize: !0
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 1.5
                            },
                            repulse: {
                                distance: 200,
                                duration: .4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: !0
                });
        }
    };
});