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

$market.find('.oranges').on('click', function()	{
	$(this).fadeOut('fast');
	scene.$marketCart.addClass('cart-filled');
});