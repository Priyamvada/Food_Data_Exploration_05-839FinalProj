var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

var animateNumber = function(id, num, step) {
	$(id).animateNumber(
		{
			number: num,
			numberStep: step
		}
	);
};

var calculateFootprint = function() {
	//fancy loadingness
	document.getElementById('loader').classList.add("active")
	setTimeout(function() { document.getElementById('loader').classList.remove("active"); }, 1000);
	//calculations
	var inputOrangeElem = document.getElementById('oranges');
	var inputPerElem = document.getElementById('percentage');
	var oranges = parseInt(inputOrangeElem.value);
	var percentage = parseInt(inputPerElem.value);
	console.log("Percentage = ", percentage)
	console.log("Oranges = ", oranges)
	//constants
	var population = 350000000;//350 million
	var orangeWaterFootprint = 52; //litres
	var orangeWeight = 0.000131;//tonnes
	var orange_tree = 1250;//oranges per tree
	var area_tree = 140;

	var orangesWasted = percentage/100 * 350000000 * oranges * orangeWeight;//in tonnes
	var waterWasted = percentage/100 * 350000000 * oranges * orangeWaterFootprint;
	var area = ((percentage/100 * 350000000 * oranges) / 1250) / 140;//in acres
	console.log("Oranges Wasted = ", orangesWasted);
	console.log("Water Wasted = ", waterWasted);
	console.log("Area Wasted = ", area);

	//567,811 litres/second
	var timeNiagara = (waterWasted / 567811) / 60;
	console.log("Water Wasted in Niagara time = ", timeNiagara);

	//1 field = 1.32 acres

	var footballFields = area / 1.32;
	console.log("Football Fields = ", footballFields);
	animateNumber('#orange-count', orangesWasted, comma_separator_number_step);
	animateNumber('#football', footballFields, comma_separator_number_step)
	animateNumber('#niagara', timeNiagara, comma_separator_number_step)
};

$(document).ready(function() {
			var clock;

			var prod_rate = 14.9; //tonnes per second
			var cons_rate = 8.195; //tonnes per second

			var desired_prod_rate_base = 14.9; //tonnes per second
			var desired_cons_rate_base = 8.195; //tonnes per second

			var desired_prod_rate = 14.9; //tonnes per second
			var desired_cons_rate = 8.195; //tonnes per second

			clock = $('.clock').FlipClock({
				clockFace: 'HourlyCounter',
				autoStart: false,
				callbacks: {
					interval: function() {
						//update logic
						var prodCount = parseInt(document.getElementById("produced-amount").innerHTML.replace(/,/g, ''));
						var consCount = parseInt(document.getElementById("consumed-amount").innerHTML.replace(/,/g, ''));
						var wasteCount = parseInt(document.getElementById("wasted-amount").innerHTML.replace(/,/g, ''));

		        		$('#produced-amount').animateNumber(
		        		{
		        			number: prodCount+prod_rate,
		        			numberStep: comma_separator_number_step
		        		}
		        		);

		        		$('#consumed-amount').animateNumber(
		        		{
		        			number: consCount+cons_rate,
		        			numberStep: comma_separator_number_step
		        		}
		        		);

		        		$('#wasted-amount').animateNumber(
		        		{
		        			number: wasteCount+(prod_rate-cons_rate),
		        			numberStep: comma_separator_number_step
		        		}
		        		);
		        	}
		        }
		    });
		
		clock.setTime(0);
		clock.setCountdown(false);
		clock.start();
	});