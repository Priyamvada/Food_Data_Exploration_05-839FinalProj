var animator = {
	simpleHorizontal: function($elem, startLeft, stopLeft, currentScrollLeft)	{
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