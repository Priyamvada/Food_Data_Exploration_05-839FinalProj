var animator = {
	simpleHorizontal: function(currentScrollLeft, $elem, startLeft, stopLeft)	{
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
	},

	simpleAppear: function(currentScrollLeft, $elem, startLeft, stopLeft)	{
		if(currentScrollLeft < startLeft || (stopLeft != null && currentScrollLeft > stopLeft))	{
			$elem.hide();
		} else	{
			$elem.show();
		}
	}
};