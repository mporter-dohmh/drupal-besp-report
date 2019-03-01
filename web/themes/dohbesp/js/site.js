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

function scrollToSection(hash) {
    var x = document.getElementById("myLinks");
    x.style.display = "none";
    var scrollto = jQuery(hash).position().top;
    jQuery('html, body').animate({
        scrollTop: scrollto
      }, 1200);
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
