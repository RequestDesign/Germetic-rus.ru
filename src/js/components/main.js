'use strict';
import Swiper from 'swiper/bundle';
window.$ = window.jQuery = require('jquery');
const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина мобильной версии макета
    return (100 / 375) * (0.05 * window.innerWidth) * rem;
  }
}

//dropdown
let timer;
$(function() {
  if ($(window).width() > 768) {
    $(".dropdown").find('.header__dropdown').hide();
    $(".dropdown").on("mouseenter",
      function () {
        clearTimeout(timer);
        $(".dropdown").find('.header__dropdown').hide();
        $(".dropdown").removeClass('active');
        $(this).addClass('active');
        $(this).find(".header__dropdown").show();
      })

    $(".dropdown").on("mouseleave", function () {
      const drop = $(this).find(".header__dropdown");
        timer = setTimeout(function () {
          drop.hide();
          $(".dropdown").removeClass('active');
        }, 200);
        $(this).find(".header__dropdown").on("mouseenter",
          function () {
            clearTimeout(timer);
          })
        $(this).find(".header__dropdown").on("mouseleave",
          function () {
            drop.hide();
            $(".dropdown").removeClass('active');
          })
      }
    );
  }
})