function resetDims()	{
	dims={
		lOff: {
			harvest: parseFloat($harvest.find('.ground').css('left')),
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
}

var $scrollContainer = $(document).find('#scrollContainer');

var $harvest = $scrollContainer.find('.scene#harvest-scene');
var $transportI = $scrollContainer.find('.scene#transportation-scene-I');
var $processing = $scrollContainer.find('.scene#food-processing-scene');
var $transportII = $scrollContainer.find('.scene#transportation-scene-II');
var $market = $scrollContainer.find('.scene#market');

var scene = {
	$truckI: $transportI.find('.truck'),
	$truckII: $transportII.find('.truck')
};

var dims = {};
resetDims();

// attaching Listeners
$(window).on('scroll', function(e, args)	{
	var currentScrollLeft = $(window).scrollLeft();
	animator.simpleHorizontal(scene.$truckI, dims.lOff.transportI, dims.lOff.processing - dims.width.truckI - 35, currentScrollLeft);
	animator.simpleHorizontal(scene.$truckII, dims.lOff.transportII, dims.lOff.market - dims.width.truckII - 35, currentScrollLeft);
});

$(window).on('resize', function()	{
	resetDims();
});


