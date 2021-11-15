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

const swiperDesktop = new Swiper('.swiper-container-desktop', {
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


// АККОРДИОН

$( function() {
  $( "#accordion-ita" ).accordion({
    heightStyle: "content"
  });
});

$( function() {
  $( "#accordion-fr" ).accordion({
    heightStyle: "content"
  });
});

$( function() {
  $( "#accordion-ger" ).accordion({
    heightStyle: "content"
  });
});

$( function() {
  $( "#accordion-rus" ).accordion({
    heightStyle: "content"
  });
});


$( function() {
  $( "#accordion-esp" ).accordion({
    heightStyle: "content"
  });
});

// ТАБЫ
// Переключатель языка
document.querySelectorAll('.catalog-tabs-item-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const target = event.currentTarget.dataset.target;
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
      tabContent.classList.remove('tab-content--active');
    });
    document.querySelectorAll('.catalog-tabs-item-btn').forEach(function(btn){
      btn.classList.remove('catalog-tabs-item-btn--active');
    });
    event.currentTarget.classList.add('catalog-tabs-item-btn--active');
    document.querySelector(`[data-path="${target}"]`).classList.add('tab-content--active');
  });
});

// Выбор художника

document.querySelectorAll('.catalog-artist-item__btn').forEach(function(artistBtn) {
  artistBtn.addEventListener('click', function(event) {
    const btn = event.currentTarget.dataset.btn;
    const contant = event.currentTarget.dataset.contant;
    document.querySelectorAll('.catalog-artist-desc').forEach(function(artistContent) {
      artistContent.classList.remove('artist-active');
    });
    document.querySelectorAll('.catalog-artist-item__btn').forEach(function(button){
      button.classList.remove('artist-btn__active');
    });
    event.currentTarget.classList.add('artist-btn__active');
    document.querySelector(`[data-content="${btn}"]`).classList.add('artist-active');
  });
});

// Выпадающие события

document.querySelector('.developments__btn').addEventListener('click', function() {
  document.querySelector('.developments-cards--hidden').classList.add('developments-cards--active');
  document.querySelector('.developments__btn').classList.add('developments__btn--hidden')
})

// Свайпер СОБЫТИЯ



// Свайпер ИЗДАНИЯ

const swiperEdition = new Swiper('.edition-swiper', {
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
})
