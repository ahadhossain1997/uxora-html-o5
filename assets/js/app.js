"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  LONYO PRELOADER JS INIT
  LONYO HEADER TRIGER JS INIT
  LONYO MENU SIDEBAR JS INIT
  LONYO PROGRES CIRCLE JS INIT
  LONYO MAGNIFIC PUPOP JS INIT
  LONYO BRAND SLIDER INIT
  LONYO COUNTER JS INIT
  LONYO TSTIMONIAL SLIDER INIT
  LONYO SKILLBAR JS INIT
  LONYO CURRENT YEAR JS INIT
  LONYO AOS ANIMATION JS INIT
  LONYO MAP JS INIT
  LONYO VERTICAL SLIDER JS INIT
  LONYO TOOGLE BUTTON JS INIT
  LONYO PORTFOLIO MASONAY FILTER JS
  LONYO TOGGLE PASSOWRD JS INIT
  
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    LONYO PRELOADER JS INIT
    --------------------------------------------------------------*/
    // $(".uxora-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    LONYO MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".uxora-header-triger").on("click", function (e) {
      $(".uxora-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".uxora-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".uxora-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });
    /*--------------------------------------------------------------
    LONYO PROGRES CIRCLE JS INIT
    --------------------------------------------------------------*/

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });
    var lastScroll = 0;
    function sticky_header() {
      var header_hegith = $('header').innerHeight();
      var scroll = $(window).scrollTop();
      if (scroll > header_hegith && scroll > lastScroll) {
        $('header').addClass('hide-header');
      } else if (scroll < lastScroll) {
        $('header').removeClass('hide-header');
      }
      lastScroll = scroll;
    }
    $(function () {
      sticky_header();
    });
    window.onload = function () {
      sticky_header();
    };
    window.onscroll = function () {
      sticky_header();
    };
    window.onresize = function (event) {
      sticky_header();
    };

    /*--------------------------------------------------------------
    UXORA BRAND JS INIT
    --------------------------------------------------------------*/

    var brand_slider = $('.uxora-brand-slider-init');
    if (brand_slider.is_exist()) {
      brand_slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    var p_slider_data = $('.uxora-t-slider-init');
    if (p_slider_data.is_exist()) {
      p_slider_data.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    var testimonial_slider_data = $('.uxora-t-slider-init2');
    if (testimonial_slider_data.is_exist()) {
      testimonial_slider_data.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        arrows: false,
        rtl: true,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize
})(jQuery);

/*===========================================
    =    On Load Function      =
=============================================*/
$(window).on("load", function () {
  preloader();
});

/*===========================================
    =    Preloader      =
=============================================*/
function preloader() {
  $('.preloader').delay(0).fadeOut();
}
;