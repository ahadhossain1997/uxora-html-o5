"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

    /*--------------------------------------------------------------
    UXORA MAGNIFIC PUPOP JS INIT
    --------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

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

    /*--------------------------------------------------------------
    UXORA  TESTIMONIAL SLIDER JS INIT
    --------------------------------------------------------------*/
    var T_slider = $('.uxora-team-slider-init');
    if (T_slider.is_exist()) {
      T_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
      }, "slidesToScroll", 1), "infinite", true), "speed", 1000), "prevArrow", '<button class="slide-arrow uxora-team-slider-next"></button>'), "nextArrow", '<button class="slide-arrow uxora-team-slider-prev"></button>'), "responsive", [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]));
    }

    /*--------------------------------------------------------------
    LONYO COUNTER JS INIT
    --------------------------------------------------------------*/

    var stats = document.querySelectorAll(".uxora-counter-data");
    stats.forEach(function (stat) {
      // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
      var patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
      var time = 1000;
      var result = _toConsumableArray(patt.exec(stat.textContent));
      var fresh = true;
      var ticks;

      // Remove first full match from result array (we dont need the full match, just the individual match groups).
      result.shift();
      // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
      result = result.filter(function (res) {
        return res != null;
      });
      while (stat.firstChild) {
        stat.removeChild(stat.firstChild);
      }
      var _iterator = _createForOfIteratorHelper(result),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var res = _step.value;
          if (isNaN(res)) {
            stat.insertAdjacentHTML("beforeend", "<span>".concat(res, "</span>"));
          } else {
            for (var i = 0; i < res.length; i++) {
              stat.insertAdjacentHTML("beforeend", "<span data-value=\"".concat(res[i], "\">\n\t\t\t\t\t\t<span>&ndash;</span>\n\t\t\t\t\t\t").concat(Array(parseInt(res[i]) + 1).join(0).split(0).map(function (x, j) {
                return "\n\t\t\t\t\t\t\t<span>".concat(j, "</span>\n\t\t\t\t\t\t");
              }).join(""), "\n\t\t\t\t\t</span>"));
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ticks = _toConsumableArray(stat.querySelectorAll("span[data-value]"));
      var activate = function activate() {
        var top = stat.getBoundingClientRect().top;
        var offset = window.innerHeight * 0.8;
        setTimeout(function () {
          fresh = false;
        }, time);
        if (top < offset) {
          setTimeout(function () {
            var _iterator2 = _createForOfIteratorHelper(ticks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var tick = _step2.value;
                var dist = parseInt(tick.getAttribute("data-value")) + 1;
                tick.style.transform = "translateY(-".concat(dist * 100, "%)");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, fresh ? time : 0);
          window.removeEventListener("scroll", activate);
        }
      };
      window.addEventListener("scroll", activate);
      activate();
    });
    var $items = $(".uxora-process-wrap");
    if ($items.length) {
      $items.on("mouseover", function () {
        // Remove 'hovered' class from all items
        $items.removeClass("hovered");

        // Add 'hovered' class to the current item
        $(this).addClass("hovered");
      });
    }
    (function ($) {
      $.fn.skillBars = function (options) {
        var settings = $.extend({
          from: 0,
          // number start
          to: false,
          // number end
          speed: 1000,
          // how long it should take to count between the target numbers
          interval: 100,
          // how often the element should be updated
          decimals: 0,
          // the number of decimal places to show
          onUpdate: null,
          // callback method for every time the element is updated,
          onComplete: null,
          // callback method for when the element finishes updating
          /*onComplete: function(from) {
                    console.debug(this);
                }*/
          classes: {
            skillBarBar: '.skillbar-bar',
            skillBarPercent: '.skill-bar-percent'
          }
        }, options);
        return this.each(function () {
          var obj = $(this),
            to = settings.to != false ? settings.to : parseInt(obj.attr('data-percent'));
          if (to > 100) {
            to = 100;
          }
          ;
          var from = settings.from,
            loops = Math.ceil(settings.speed / settings.interval),
            increment = (to - from) / loops,
            loopCount = 0,
            interval = setInterval(updateValue, settings.interval);
          obj.find(settings.classes.skillBarBar).animate({
            width: parseInt(obj.attr('data-percent')) + '%'
          }, settings.speed);
          function updateValue() {
            from += increment;
            loopCount++;
            $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');
            if (typeof settings.onUpdate == 'function') {
              settings.onUpdate.call(obj, from);
            }
            if (loopCount >= loops) {
              clearInterval(interval);
              from = to;
              if (typeof settings.onComplete == 'function') {
                settings.onComplete.call(obj, from);
              }
            }
          }
        });
      };
    })(jQuery);
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*--------------------------------------------------------------
  LONYO MAP JS INIT
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'uxora'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>uxora' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }
})(jQuery);

/*--------------------------------------------------------------
TECHIN TOOGLE BUTTON JS INIT
--------------------------------------------------------------*/

$(document).ready(function () {
  $(".toggle-button").change(function () {
    toggle(this.checked);
  });

  // Uncomment this to disaplay monthly on page load
  toggle(false);
  function toggle(checked) {
    $(".toggle-button").prop('checked', checked);
    if (checked) {
      $('.coreMonthlyPrice, .proMonthlyPrice').show();
      $('.coreAnnuallyText, .coreAnnuallyPrice, .proAnnuallyPrice').hide();
    } else {
      $('.coreMonthlyPrice,.proMonthlyPrice').hide();
      $('.coreAnnuallyText,.coreAnnuallyPrice, .proAnnuallyPrice').show();
    }
  }
});

/*--------------------------------------------------------------
UXORA TOGGLE PASSOWRD JS INIT
------------------------------------------------------------*/

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
$(".toggle-password2").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

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

// Table BTN Trigger
$("#l5-pricing-btn .toggle-btn").on("click", function (e) {
  console.log($(e.target).parent().parent().hasClass("monthly-active"));
  $(e.target).toggleClass("clicked");
  if ($(e.target).parent().parent().hasClass("monthly-active")) {
    $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
  } else {
    $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
  }
});
$("[data-pricing-trigger]").on("click", function (e) {
  $(e.target).addClass("active").siblings().removeClass("active");
  var target = $(e.target).attr("data-target");
  console.log($(target).attr("data-value-active") == "monthly");
  if ($(target).attr("data-value-active") == "monthly") {
    $(target).attr("data-value-active", "yearly");
  } else {
    $(target).attr("data-value-active", "monthly");
  }
});