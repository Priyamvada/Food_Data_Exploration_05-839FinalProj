$(document).ready(function() {
//on document ready

var unitConvert = function(x) {
     return ((x/100) * $(window).height());
}

var controller = new ScrollMagic.Controller({vertical: false});//instantiate controller for horizontal scrolling

var harvest_animation = new TimelineMax();

var farmer_trigger = document.getElementById('farmer').offsetLeft - unitConvert(40);

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
            left: "+=20vh",
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
            duration: 600
        }).setTween(harvest_animation).addTo(controller);
//Harvest Scene animations done


var processing_trigger = document.getElementById('apparatus').offsetLeft - unitConvert(25);
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
                document.getElementById('packaged-oranges-one').style.display = "block";
            },
            onComplete: function() {
                document.getElementById('packaged-oranges-one').style.display = "none";
            }
        })]).add([TweenMax.to(["#packaged-oranges-two","#packaged-oranges-three"], 2, {
            left: "+=30vh",
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
        }).setTween(processing_animation).addTo(controller);

//harvest text animation scene
var harvest_text_animation = new TimelineMax();
var text_farmer_trigger = document.getElementById('farmer').offsetLeft + unitConvert(10);

harvest_text_animation.add([TweenMax.to("#farm-I-text", 2, {
            display: 'block',
            autoAlpha: 1,
            opacity: 1,
            onStart: function() {

            },
            onReverseComplete: function() {
                display: 'none'
            }
        })])

var harvest_scene_text = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: text_farmer_trigger,
            duration: 200
        }).setTween(harvest_text_animation)/*.addIndicators()*/.addTo(controller);


//transport text animation scene
/*var transport_text_animation = new TimelineMax();
var text_transport_trigger = document.getElementById('truck-parking-space').offsetLeft - unitConvert(120);

transport_text_animation.add([TweenMax.to("#transportation-I-text", 2, {
            display: 'block',
            autoAlpha: 1,
            opacity: 1,
            onStart: function() {

            },
            onReverseComplete: function() {
                display: 'none'
            }
        })])*/

/*var transport_scene_text = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: text_transport_trigger,
            duration: 200
        }).setTween(transport_text_animation).addIndicators().addTo(controller);*/

//processing text animation scene
var processing_text_animation = new TimelineMax();
var text_processing_trigger = document.getElementById('food-truck-2').offsetLeft - unitConvert(150);

processing_text_animation.add([TweenMax.to("#food-processing-text", 2, {
            display: 'block',
            autoAlpha: 1,
            opacity: 1,
            onStart: function() {

            },
            onReverseComplete: function() {
                display: 'none'
            }
        })])

var processing_screen_text = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: text_processing_trigger,
            duration: 200
        }).setTween(processing_text_animation)/*.addIndicators()*/.addTo(controller);


//market text animation scene
var market_text_animation = new TimelineMax();
var text_market_trigger = document.getElementById('market-shelf').offsetLeft + unitConvert(10);

market_text_animation.add([TweenMax.to("#market-text-II", 2, {
            display: 'block',
            autoAlpha: 1,
            opacity: 1,
            onStart: function() {

            },
            onReverseComplete: function() {
                display: 'none'
            }
        })])

var market_scene_text = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: text_market_trigger,
            duration: 200
        }).setTween(market_text_animation)/*.addIndicators()*/.addTo(controller);

//home text animation scene
var home_text_animation = new TimelineMax();
var text_home_trigger = document.getElementById('home-window').offsetLeft - unitConvert(20);

home_text_animation.add([TweenMax.to("#home-text", 2, {
            display: 'block',
            autoAlpha: 1,
            opacity: 1,
            onStart: function() {

            },
            onReverseComplete: function() {
                display: 'none'
            }
        })])

var home_scene_text = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: text_home_trigger,
            duration: 200
        }).setTween(home_text_animation)/*.addIndicators()*/.addTo(controller);

//market text animation scene
var market_question_animation = new TimelineMax();
var question_market_trigger = document.getElementById('market-shelf').offsetLeft - unitConvert(50);

market_question_animation.add([TweenMax.to("#market-text-I", 2, {
            display: 'block',
            autoAlpha: 1,
            opacity: 1,
            onStart: function() {

            },
            onReverseComplete: function() {
                display: 'none'
            }
        })])

var market_scene_question = new ScrollMagic.Scene({
            triggerHook: 0.2,
            offset: question_market_trigger,
            duration: 200
        }).setTween(market_question_animation)/*.addIndicators()*/.addTo(controller);

});