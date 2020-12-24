let mySwiper = new Swiper('.swiper-container', {
	loop: true,
});

let gallerySwiper = new Swiper('.gallery__swiper-container', {
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

const rect = document.querySelector('.header-search__btn svg rect');
const path = document.querySelector('.header-search__btn svg path');
const input = document.querySelector('.header-search__input');

input.onfocus = function() {
	rect.classList.add('header-search__bth--fill');
	path.classList.add('header-search__bth--fill')
}

input.onblur = function() {
	rect.classList.remove('header-search__bth--fill');
	path.classList.remove('header-search__bth--fill')
}

/* Header выпадающий список*/

let el = document.getElementsByClassName('header-bot__item');

for (let i = 0; i < el.length; i++) {
	el[i].addEventListener('mouseenter', showList, false)
	el[i].addEventListener('mouseleave', hideList, false)
}

function showList() {
	this.children[0].classList.add('show--title');
	this.children[0].classList.add('after');
	if(this.children.length > 1) {
		this.children[1].classList.add('show--list');
	} else {
		return false;
	}
};

function hideList() {
	this.children[0].classList.remove('show--title');
	this.children[0].classList.remove('after');
	if(this.children.length > 1) {
		this.children[1].classList.remove('show--list');
	} else {
		return false;
	}
};