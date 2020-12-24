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

/* Заливка иконки поиска*/

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

/* Header выпадающий список*/

let el = document.getElementsByClassName('header-bot-item');

for (let i = 0; i < el.length; i++) {
	el[i].addEventListener('click', toggleMenu, false);
}

function toggleMenu() {
	this.children[0].classList.toggle('is-open--title');
	this.children[0].classList.toggle('after');
	if(this.children.length > 1) {
		this.children[1].classList.toggle('is-open--list');
	} else {
		return false;
	}
};