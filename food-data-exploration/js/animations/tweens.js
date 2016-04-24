$(document).ready(function() {
//on document ready

var unitConvert = function(x) {
     return ((x/100) * $(window).height());
}

var controller = new ScrollMagic.Controller({vertical: false});//instantiate controller for horizontal scrolling

var harvest_animation = new TimelineMax();
var transport_animation = new TimelineMax();

var farmer_trigger = document.getElementById('farmer').offsetLeft - unitConvert(60);
console.log(farmer_trigger);

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

var scene = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: farmer_trigger,
            duration: 400
        }).setTween(harvest_animation).addTo(controller);


});