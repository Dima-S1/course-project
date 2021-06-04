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
