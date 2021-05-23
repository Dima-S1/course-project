// Функция открытия и закрытия строки поиска

document.querySelector('.header-top-search-btn').addEventListener('click', function() {
  document.querySelector('.header-search-open').classList.add('is-open_flex');
});

document.querySelector('.header-search-open-close__btn').addEventListener('click', function() {
  document.querySelector('.header-search-open').classList.remove('is-open_flex');
});

// Функция открытия и закрытия меню бургер

document.querySelector('.header-burger').addEventListener('click', function() {
  document.querySelector('.header-burger-menu').classList.add('is-open_block');
});

document.querySelector('.header-burger-menu-close').addEventListener('click', function() {
  document.querySelector('.header-burger-menu').classList.remove('is-open_block');
});

// Выпадающий список

document.querySelector('#dropbtn1').addEventListener('click', function() {
  document.querySelector('#droplist1').classList.toggle('is-open_block');
});

document.querySelector('#dropbtn2').addEventListener('click', function() {
  document.querySelector('#droplist2').classList.toggle('is-open_block');
});

document.querySelector('#dropbtn3').addEventListener('click', function() {
  document.querySelector('#droplist3').classList.toggle('is-open_block');
});

document.querySelector('#dropbtn4').addEventListener('click', function() {
  document.querySelector('#droplist4').classList.toggle('is-open_block');
});

document.querySelector('#dropbtn5').addEventListener('click', function() {
  document.querySelector('#droplist5').classList.toggle('is-open_block');
});
