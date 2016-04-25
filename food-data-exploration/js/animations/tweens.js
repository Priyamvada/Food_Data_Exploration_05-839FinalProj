$(document).ready(function() {
//on document ready

var unitConvert = function(x) {
     return ((x/100) * $(window).height());
}

var controller = new ScrollMagic.Controller({vertical: false});//instantiate controller for horizontal scrolling

var harvest_animation = new TimelineMax();

var farmer_trigger = document.getElementById('farmer').offsetLeft - unitConvert(60);

//animate code start
//harvest animation
harvest_animation.add([TweenMax.to("#trolley", 0.2, {
            onStart: function() {
                document.getElementById('trolley-oranges-1').style.display = "block";
            },
            onReverseComplete: function() {
                document.getElementById('trolley-oranges-1').style.display = "none";
            }
        })]).add([TweenMax.to("#trolley", 0.2, {
            onStart: function() {
                document.getElementById('trolley-oranges-2').style.display = "block";
            },
            onReverseComplete: function() {
                document.getElementById('trolley-oranges-2').style.display = "none";
            }
        })]).add([TweenMax.to("#trolley", 0.2, {
            onStart: function() {
                document.getElementById('trolley-oranges-3').style.display = "block";
            },
            onReverseComplete: function() {
                document.getElementById('trolley-oranges-3').style.display = "none";
            }
        })]).add([TweenMax.to("#trolley", 0.2, {
            onStart: function() {
                document.getElementById('trolley-oranges-4').style.display = "block";
            },
            onReverseComplete: function() {
                document.getElementById('trolley-oranges-4').style.display = "none";
            }
        })]).add([TweenMax.to("#trolley", 0.2, {
            onStart: function() {
                document.getElementById('trolley-oranges-5').style.display = "block";
            },
            onReverseComplete: function() {
                document.getElementById('trolley-oranges-5').style.display = "none";
            }
        })]).add([TweenMax.to("#trolley", 0.2, {
            onStart: function() {
                document.getElementById('trolley-oranges-6').style.display = "block";
            },
            onReverseComplete: function() {
                document.getElementById('trolley-oranges-6').style.display = "none";
            }
        })]).add([TweenMax.to("#farmer", 1, {
            left: "+=10vh",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to(["#trolley", "#farmer", "#trolley-oranges-1", "#trolley-oranges-2", "#trolley-oranges-3", "#trolley-oranges-4", "#trolley-oranges-5", "#trolley-oranges-6"], 1, {
            left: "+=110vh",
            onStart: function() {
            }
        })])
//animate code end
var harvest_scene = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: farmer_trigger,
            duration: 400
        }).setTween(harvest_animation).addTo(controller);
//Harvest Scene animations done


var processing_trigger = document.getElementById('apparatus').offsetLeft - unitConvert(60);
var processing_animation = new TimelineMax();


processing_animation.add([TweenMax.to("#oranges-main", 2, {
            left: "+=30vh",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to("#packaged-oranges-one", 2, {
            left: "+=30vh",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to(["#packaged-oranges-one","#packaged-oranges-two"], 2, {
            left: "+=30vh",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to(["#packaged-oranges-one","#packaged-oranges-two","#packaged-oranges-three"], 2, {
            left: "+=15vh",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to(["#packaged-oranges-one","#packaged-oranges-two","#packaged-oranges-three"], 2, {
            left: "+=15vh",
            onStart: function() {
            },
            onReverseComplete: function() {
                document.getElementById('packaged-oranges-one').style.display = "block";
            },
            onComplete: function() {
                document.getElementById('packaged-oranges-one').style.display = "none";
            }
        })]).add([TweenMax.to(["#packaged-oranges-two","#packaged-oranges-three"], 2, {
            left: "+=25vh",
            onStart: function() {
            },
            onReverseComplete: function() {
                document.getElementById('packaged-oranges-two').style.display = "block";
            },
            onComplete: function() {
                document.getElementById('packaged-oranges-two').style.display = "none";
            }
        })]).add([TweenMax.to("#packaged-oranges-three", 2, {
            left: "+=20vh",
            onStart: function() {
            },
            onReverseComplete: function() {
                document.getElementById('packaged-oranges-three').style.display = "block";
            },
            onComplete: function() {
                document.getElementById('packaged-oranges-three').style.display = "none";
            }
        })])

var processing_scene = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: processing_trigger,
            duration: 500
        }).setTween(processing_animation).addIndicators().addTo(controller);

});