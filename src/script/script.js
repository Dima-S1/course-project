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

// ТУЛТИПЫ

tippy('#tooltip1', {
  content: 'Пример современных тенденций - современная методология разработки',
  trigger: 'click',
  theme: 'blue',
});

tippy('#tooltip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  trigger: 'click',
  theme: 'blue',
});

tippy('#tooltip3', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
  theme: 'blue',
});

// СВАЙПЕР СОБЫТИЯ

const devSwiper = new Swiper('.swiper-dev', {
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletClass: 'swiper-bullet__dev swiper-pagination-bullet',
    bulletActiveClass: 'swiper-bullet__dev--active swiper-pagination-bullet-active'
  },

  breakpoints: {
    1580: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    770: {
      slidesPerView: 3,
      spaceBetween: 27,
    },

    550: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    180: {
      slidesPerView: 1,
    }

  }
});



// СВАЙПЕР ПРОЕКТЫ

const projectSwiper = new Swiper('.project-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1580: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    770: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    180: {
      slidesPerView: 1,
    }
  }
});


// КАРТА

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });

    myMap.controls.remove('zoomControl')
    myMap.controls.remove('searchControl');
    myMap.controls.remove('routeButton');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');

    var zoomControl = new ymaps.control.ZoomControl({
      options: {
          size: 'small',
          width: '150px',
          position: {
            top: '260px',
            right: '23px'
        }
      }
    });

    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
        top: '330px',
        right: '23px',
      }
  })

  var myPlacemark = new ymaps.Placemark([55.76, 37.60], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
});

    myMap.controls.add(zoomControl);
    myMap.geoObjects.add(myPlacemark);
}


// МАСКА И ВАЛИДАЦИЯ ФОРМЫ

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask ("+7 (999) 999-99-99")

im.mask(selector);

const validation = new JustValidate(
  '#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно',
    },
    {
      rule: 'customRegexp',
      value: /(?=.*[а-я])(?=.*[А-Я])/,
      errorMessage: 'Неверный формат',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Введите 10 символов',
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: 'Введите 10 символов',
    },
  ])
