'use strict';
import Swiper from 'swiper/bundle';
var $ = require('jquery');
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
$(function () {
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

$('.product__clear').on('click', function () {
  const parent = $(this).closest('.product__summary-size');
  console.log(parent);
  $(this).closest('.product__summary-size').removeClass('active');
})

$('.product__summary-size').on('click', function () {
  if(!$(this).hasClass('active')) {
    $('.product__summary-size').removeClass('active');
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
})

$('.product__summary-color').on('click', function () {
  if(!$(this).hasClass('active')) {
    $('.product__summary-color').removeClass('active');
    $(this).addClass('active');
  }
})

//tabs//
$(`.product__tab-content[data-tab="1"]`).show();
$('.product__tab').on('click', function () {
  const tabIndex = $(this).attr("data-tab");
  if (!$(this).hasClass('active')) {
    $('.product__tab').removeClass('active');
    $(this).addClass('active');
    $('.product__tab-content').animate({
      opacity: 0
    }, 100, function () {
      $(this).hide();
      $(`.product__tab-content[data-tab="${tabIndex}"]`).show();
    });
    $(`.product__tab-content[data-tab="${tabIndex}"]`).animate({
      opacity: 1
    }, 100);
  }
});

//header search//

$('.header__search-dropdown').hide();
let scrollY = 0;
function showSearch() {
  scrollY = window.scrollY;
  const body = document.body;
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  if (window.innerWidth > 768) {
    body.style.paddingRight = "15px";
  }
  $('.header__top-nav').hide();
  $('.header__top').css('justify-content', 'space-between');
  $('.header__search-button span').show();
  $('.header__search-button').addClass('button');
  $('.header__search').addClass('active').one('transitionend', function () {
    $('.header__search-dropdown').slideDown();
  });
  $('.header').addClass('modal-search');
  //$('.header__search-dropdown').show();
}

function hideSearch() {
  $('.header__search-button span').hide();
  $('.header__search-button').removeClass('button');
  // $('.header__search').removeClass('active');
  $('.header__top-nav').show();
  // $('.header').removeClass('modal-search');
  $('.header__search-hint').hide();
  const body = document.body;
  body.style.position = "";
  body.style.top = "";
  body.style.height = "";
  body.style.overflowY = "";
  body.style.paddingRight = "";
  window.history.replaceState(
    null,
    null,
    window.location.pathname + window.location.search,
  );
  // window.scrollTo(0, scrollY);
  $('.header__search-dropdown').slideUp();
  setTimeout(function () {
    $('.header__search').removeClass('active');
    $('.header').removeClass('modal-search');
}, 300);
}

$('.header__search input').on('input', function () {
  if ($(this).val() !== '') {
    $('.header__search-clear').show();
    $('.header__search-dropdown-list').hide();
    $('.header__search-dropdown-list.category').show();
    $('.header__search-dropdown-item').show();
    $('.header__search-hint').show();
    $('.header__search-hint').css('left', `${4 + ($(this).val().length * 0.93)}rem`)
    $('[data-search="history"]').hide();
  } else {
    $('.header__search-clear').hide();
    $('.header__search-dropdown-list').show();
    $('.header__search-dropdown-list.category').hide();
    $('.header__search-dropdown-item').hide();
    $('.header__search-hint').hide();
    $('[data-search="history"]').show();
  }
})

$('.header__search input').on('click', showSearch);

$('.header__search').on('submit', function (event) {
  event.preventDefault();
  hideSearch();
})

$('#clear').on('click', function () {
  $(this).prev().val('');
  $('.header__search-clear').hide();
  $('.header__search-dropdown-list').show();
  $('.header__search-dropdown-list.category').hide();
  $('.header__search-dropdown-item').hide();
  $('.header__search-hint').hide();
  $('[data-search="history"]').show();
})

$(document).on('click', function(event) {
  if (!$(event.target).closest('.header__search').length) {
    hideSearch();
    $('.header__search-clear').hide();
  }
});

//swipers//
const slider = new Swiper('.product__tabs', {
  slidesPerView: 'auto',
  spaceBetween: rem(0.8),
  watchOverflow: true,
})

