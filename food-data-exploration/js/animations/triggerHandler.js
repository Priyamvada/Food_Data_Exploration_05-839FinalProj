var animator = {
	simpleHorizontal: function($elem, startLeft, stopLeft)	{
		var currentScrollLeft = $(window).scrollLeft();
		if(currentScrollLeft < startLeft)	{
			$elem.addClass('not-started');
			$elem.removeClass('stopped');
		} else if(currentScrollLeft > stopLeft)	{
			$elem.addClass('stopped');
			$elem.removeClass('not-started');
		}	else	{
			$elem.removeClass('not-started');
			$elem.removeClass('stopped');
		}
	}
};