let mySwiper = new Swiper('.swiper-container', {
	loop: true,
});

let gallerySwiper = new Swiper('.gallery-swiper-container', {
	loop: true,
  navigation: {
	 nextEl: '.swiper-button-next',
	 prevEl: '.swiper-button-prev',
  },
  pagination: {
	 el: '.swiper-pagination',
	 type: 'fraction',
	},
});

const element = document.querySelector('.gallery-left__select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
});

const headerElement1 = document.querySelector('.select1');
const choices1 = new Choices(headerElement1, {
	searchEnabled: false,
	itemSelectText: '',
});

const headerElement2 = document.querySelector('.select2');
const choices2 = new Choices(headerElement2, {
	searchEnabled: false,
	itemSelectText: '',
});

const headerElement3 = document.querySelector('.select3');
const choices3 = new Choices(headerElement3, {
	searchEnabled: false,
	itemSelectText: '',
});

const headerElement4 = document.querySelector('.select4');
const choices4 = new Choices(headerElement4, {
	searchEnabled: false,
	itemSelectText: '',
});

const headerElement5 = document.querySelector('.select5');
const choices5 = new Choices(headerElement5, {
	searchEnabled: false,
	itemSelectText: '',
});


const rect = document.querySelector('.header-bot-search__btn svg rect');
const path = document.querySelector('.header-bot-search__btn svg path');
const input = document.querySelector('.header-bot-search__input');

input.onfocus = function() {
	rect.classList.add('header-bot-search__bth--fill');
	path.classList.add('header-bot-search__bth--fill')
}

input.onblur = function() {
	rect.classList.remove('header-bot-search__bth--fill');
	path.classList.remove('header-bot-search__bth--fill')
}