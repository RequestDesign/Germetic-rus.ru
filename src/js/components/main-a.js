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
  $('.header__search-button span').show();
  $('.header__search-button').addClass('button');
  $('.header__search').addClass('active');
  $('.header').addClass('modal-search');
  $('.header__search-dropdown').show();
}

function hideSearch() {
  $('.header__search-button span').hide();
  $('.header__search-button').removeClass('button');
  $('.header__search').removeClass('active');
  $('.header__top-nav').show();
  $('.header').removeClass('modal-search');
  $('.header__search-dropdown').hide();
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
  window.scrollTo(0, scrollY);
}

$('.header__search input').on('input', function () {
  if ($(this).val() !== '') {
    $('.header__search-clear').show();
    $('.header__search-dropdown-list').hide();
    $('.header__search-dropdown-list.category').show();
    $('.header__search-dropdown-item').show();
    $('[data-search="history"]').hide();
  } else {
    $('.header__search-clear').hide();
    $('.header__search-dropdown-list').show();
    $('.header__search-dropdown-list.category').hide();
    $('.header__search-dropdown-item').hide();
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
  $('[data-search="history"]').show();
})