let burgerButton = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let burgerButtonClose = document.querySelector('.menu__burger')
let overlay = document.querySelector('.menu__overlay')
let body = document.querySelector('body')

burgerButton.addEventListener('click', function () {
	menu.classList.add('menu__opened');
	body.style.overflow = 'hidden';
});

burgerButtonClose.onclick = function () {
	menu.classList.remove('menu__opened');
	body.style.overflow = 'visible';
}

overlay.onclick = function() {
	menu.classList.remove('menu__opened');
	body.style.overflow = 'visible';
}




