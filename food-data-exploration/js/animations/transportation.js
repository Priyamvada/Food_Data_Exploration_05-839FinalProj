function resetDims()	{
	dims={
		lOff: {
			harvest: parseFloat($harvest.find('.ground').css('left')),
			transportI: parseFloat($transportI.find('.ground').css('left')),
			processing: parseFloat($processing.find('.building-1').css('left')),
			transportII: parseFloat($transportII.find('.ground').css('left')),
			market: parseFloat($market.find('.ground').css('left')),
			marketShelf: parseFloat($market.find('.shelf').css('left')),
			home: parseFloat($home.find('.ground').css('left')),
			homeWindow: parseFloat($home.find('.window').css('left')),
			table: parseFloat($home.find('.table').css('left'))
		},

		width: {
			truckI: scene.$truckI.width(),
			truckII: scene.$truckII.width(),
			homeWindow: $home.find('.window').width(),
			marketCart: scene.$marketCart.width(),
			girl: $market.find('.girl').width(),
			groceryBag: $market.find('.grocery-bag').width()
		}
	};
}

var $scrollContainer = $(document).find('#scrollContainer');

var $harvest = $scrollContainer.find('.scene#harvest-scene');
var $transportI = $scrollContainer.find('.scene#transportation-scene-I');
var $processing = $scrollContainer.find('.scene#food-processing-scene');
var $transportII = $scrollContainer.find('.scene#transportation-scene-II');
var $market = $scrollContainer.find('.scene#market');
var $home = $scrollContainer.find('.scene#home');

var scene = {
	$truckI: $transportI.find('.truck'),
	$truckII: $transportII.find('.truck'),
	$preprocessedOranges: $processing.find('#oranges-main'),
	$girl: $market.find('.girl'),
	$shelfOrangesLeft: $market.find('.oranges-left-column'),
	$shelfOrangesMiddle: $market.find('.oranges-middle-column'),
	$shelfOrangesRight: $market.find('.oranges-right-column'),
	$marketCart: $market.find('.cart'),
	$groceryBag: $market.find('.grocery-bag'),
	$table: $home.find('.table')
};

var dims = {};
resetDims();

// attaching Listeners
$(window).on('scroll', function(e, args)	{
	var currentScrollLeft = $(window).scrollLeft();
	animator.simpleHorizontal(currentScrollLeft, scene.$truckI, dims.lOff.transportI, dims.lOff.processing - dims.width.truckI - 35 );
	animator.simpleAppear(currentScrollLeft, scene.$preprocessedOranges, dims.lOff.processing - dims.width.truckI - 20);
	//made the hack below. PT change it to the right way, and scold me
	animator.simpleHorizontal(currentScrollLeft, scene.$truckII, dims.lOff.transportII - 250, dims.lOff.market - dims.width.truckII - 35);
	animator.simpleHorizontal(currentScrollLeft, scene.$girl, dims.lOff.market + 80, dims.lOff.homeWindow + dims.width.homeWindow/3);
	animator.simpleHorizontal(currentScrollLeft, scene.$marketCart, dims.lOff.market + 100, dims.lOff.home - 2*dims.width.marketCart);

	animator.fadeIn(currentScrollLeft, scene.$shelfOrangesLeft, dims.lOff.market - 100);
	animator.fadeIn(currentScrollLeft, scene.$shelfOrangesMiddle, dims.lOff.market - 45);
	animator.fadeIn(currentScrollLeft, scene.$shelfOrangesRight, dims.lOff.market + 30);

	animator.fadeIn(currentScrollLeft, scene.$groceryBag, dims.lOff.home - dims.width.marketCart);
	animator.fadeOut(currentScrollLeft, scene.$marketCart, dims.lOff.home - dims.width.marketCart);
	animator.simpleHorizontal(currentScrollLeft, scene.$groceryBag, dims.lOff.home - dims.width.girl, dims.lOff.table - 1.5*dims.width.groceryBag);
});

$(window).on('resize', function()	{
	resetDims();
});


