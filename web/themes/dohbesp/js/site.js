(function ($) {
    
    $(document).ready(function(){
		
        // Navigation Scroller
        $(document).on('click', '.navbar-nav a', function () {
            var hash = $(this).prop("hash");
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top
            }, 1000);
            return false;
        });
        
        // Slick Slider
        $('.slider-container-arrows').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            accessibility: true
        });
        $('.slider-container-autoplay').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            accessibility: true
        });
        $('.slider-container-arrows-autoplay').slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            accessibility: true
        });


        
        // Pass Index Values to Accordions for Collapse
        $('.panel-group').each(function (index, value) { 
                $(this).find('.panel-collapse').first().addClass("in");
                //console.log('.panel' + index + ':' + $(this).attr('id')); 
                $(this).find('.panel').each(function (index, value) {
                    $(this).find('.panel-title a').attr("href",'#collapse'+index);
                    $(this).find('.panel-collapse').attr("id", 'collapse'+index);
                });
        });

        // add event listeners for all pollutant selectors 
        // get all elements with class pollutant-selector
        //var pollutantselectors = $('.pollutant-selector');
        //$.each(pollutantselectors, function(i, ps) {
        //});
    });
                      
    /*Drupal.behaviors.myBehavior = {
        attach: function (context, settings) {
        // Using once() to apply the myCustomBehaviour effect when you want to run just one function.
    $('section', context).once('myCustomBehavior').addClass('processed');
      
      $('#slider .slider-container', context).once('slickSlider').slick({
                dots: false,
                speed: 5000,
                fade: true,
                autoplay: true,
                cssEase: 'linear'
            });

    // Using once() with more complexity.
    $('section', context).once('mySecondBehavior').each(function () {
      if ($(this).visible()) {
        $(this).css('background', 'green');
      }
      else {
        $(this).css('background', 'yellow').show();
      }
    });
  }
  };*/

})(jQuery);

function setSelectors(pollutantSelectorDiv) {
	var ps=jQuery("#"+pollutantSelectorDiv)[0];
	// jQuery.each(ps.children, function(j, p) {
	for (var i=0; i<ps.children.length; i++) {
		var p =ps.children[i];
		if (p.tagName == 'BUTTON') {
			p.onclick = function(evt) {
				var btn = evt.currentTarget;
				var selected = false;
				var cl = btn.classList;
				if (!cl.contains("pollutant-selected")) {
					selected = btn.value;
					cl.add("pollutant-selected");
					cl.remove("pollutant-not-selected");
				}
				// deselect all others
				var others = btn.parentElement.children;
				for (var j=0; j<others.length; j++) {
					var op=others[j];
					if (op.tagName == 'BUTTON' && op != btn) {
						var cl = op.classList;
						cl.remove("pollutant-selected");
						cl.add("pollutant-not-selected");
					}
				}
				if (selected) {
					var funcname = ps.id.split('-').join('_') + '_changed'
					var fn = window[funcname](selected);
				}
			};
		}
	}
}	






function scrollToSection(hash) {
    var x = document.getElementById("menuLinks");
    x.style.display = "none";
    var scrollto = jQuery(hash).position().top;
    if (scrollto  == 0) {
        scrollto = jQuery(hash).parent().position().top;
    }
    jQuery('html, body').animate({
        scrollTop: scrollto
      }, 1200);
}

function menuButtonClick() {
  var x = document.getElementById("menuLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    jQuery(".header-link")[0].focus();
  }
}
