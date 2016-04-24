var $scrollContainer = $(document).find('#scrollContainer');

//var $farm = $scrollContainer.find('.scene#transportation-scene-I');
var $transportI = $scrollContainer.find('.scene#transportation-scene-I');
var $processing = $scrollContainer.find('.scene#food-processing-scene');
var $transportII = $scrollContainer.find('.scene#transportation-scene-II');
var $market = $scrollContainer.find('.scene#market');

var scene = {
	$truckI: $transportI.find('.truck'),
	$truckII: $transportII.find('.truck')
};

var dims = {
	lOff: {
		farm: parseFloat(0),
		transportI: parseFloat($transportI.find('.ground').css('left')),
		processing: parseFloat($processing.find('.building-1').css('left')),
		transportII: parseFloat($transportII.find('.ground').css('left')),
		market: parseFloat($market.find('.ground').css('left'))
	},

	width: {
		truckI: scene.$truckI.width(),
		truckII: scene.$truckII.width()
	}
};

// attaching Listeners
$(window).on('scroll', function(e, args)	{
	animator.simpleHorizontal(scene.$truckI, dims.lOff.transportI, dims.lOff.processing - dims.width.truckI - 35);
	animator.simpleHorizontal(scene.$truckII, dims.lOff.transportII, dims.lOff.market - dims.width.truckII - 35);
	console.log(e, args);
});


