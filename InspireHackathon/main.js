(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 5,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));


// Counter ==========================================
jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});


// IncuabteIND Logo ====================================
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	 //>=, not <=
	if (scroll >= 350) {
			//clearHeader, not clearheader - caps H
			$(".logo-company").addClass("lead-on");
			if (scroll >= 3200) {
				//clearHeader, not clearheader - caps H
				$(".logo-company").removeClass("lead-on");
		} 
	} else {
			$(".logo-company").removeClass("lead-on");
	}
}); //missing );



// INSPIRE Logo ====================================
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	 //>=, not <=
	if (scroll >= 350) {
			//clearHeader, not clearheader - caps H
			$(".logo-inspire").addClass("inspire-on");
	} else {
			$(".logo-inspire").removeClass("inspire-on");
	}
}); //missing );



// smooth scroll
jQuery(document).ready(function($) {
	// Scroll to the desired section on click
	// Make sure to add the `data-scroll` attribute to your `<a>` tag.
	// Example: 
	// `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
	function scrollToSection(event) {
	  event.preventDefault();
	  var $section = $($(this).attr('href')); 
	  $('html, body').animate({
		scrollTop: $section.offset().top
	  }, 900);
	}
	$('[data-scroll]').on('click', scrollToSection);
	}(jQuery));
	


	// Matrix Code =====================================

	// geting canvas by Boujjou Achraf
	var c = document.getElementById("d");
	var ctx = c.getContext("2d");

	//making the canvas full screen
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	//chinese characters - taken from the unicode charset
	var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
	//converting the string into an array of single characters
	matrix = matrix.split("");

	var font_size = 14;
	var columns = c.width/font_size; //number of columns for the rain
	//an array of drops - one per column
	var drops = [];
	//x below is the x coordinate
	//1 = y co-ordinate of the drop(same for every drop initially)
	for(var x = 0; x < columns; x++)
			drops[x] = 3; 

	//drawing the characters
	function draw()
	{
			//Black BG for the canvas
			//translucent BG to show trail
			ctx.fillStyle = "rgba(0, 0, 0, 0.031)";
			ctx.fillRect(0, 0, c.width, c.height);

			ctx.fillStyle = "#5ab735";//green text
			ctx.font = font_size + "px arial";
			//looping over drops
			for(var i = 0; i < drops.length; i++)
			{
					//a random chinese character to print
					var text = matrix[Math.floor(Math.random()*matrix.length)];
					//x = i*font_size, y = value of drops[i]*font_size
					ctx.fillText(text, i*font_size, drops[i]*font_size);

					//sending the drop back to the top randomly after it has crossed the screen
					//adding a randomness to the reset to make the drops scattered on the Y axis
					if(drops[i]*font_size > c.height && Math.random() > 0.975)
							drops[i] = 0;

					//incrementing Y coordinate
					drops[i]++;
			}
	}

	setInterval(draw, 45);
