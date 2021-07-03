// Функция открытия и закрытия строки поиска

document.querySelector('.header-top-search-btn').addEventListener('click', function() {
  document.querySelector('.header-search-open').classList.add('is-open_flex');
});

document.querySelector('.header-search-open-close__btn').addEventListener('click', function() {
  document.querySelector('.header-search-open').classList.remove('is-open_flex');
});

// Функция открытия и закрытия меню бургер

document.querySelector('.header-burger').addEventListener('click', function() {
  document.querySelector('.header-nav__tablet').classList.add('is-open_block');
});

document.querySelector('.header-search-nav-close__btn__tablet').addEventListener('click', function() {
  document.querySelector('.header-nav__tablet').classList.remove('is-open_block');
});

// Выпадающий список

const button = document.querySelectorAll('.header-menu-item');
const drop = document.querySelectorAll('.header-dropdown');

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => {el.classList.remove(('is-open_block'))})
    e.currentTarget.closest('li').querySelector('.header-dropdown').classList.toggle('is-open_block');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header-dropdown') && !e.target.classList.contains('header-menu-item-link')) {
    drop.forEach(el => {el.classList.remove(('is-open_block'))})
  }
});

// Селект

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  duplicateItemsAllowed: false,
});


// Свайпер

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiperTablet = new Swiper('.swiper-container-tablet', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiper768 = new Swiper('.swiper-container-768', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiperMobile = new Swiper('.swiper-container-mobile', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
