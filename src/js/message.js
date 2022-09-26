let messageButton = document.querySelector('.header__message');
let messageModal = document.querySelector('.header__modal-message');
let messageButtonClose = document.querySelector('.modal-message__close')
let messageOverlay = document.querySelector('.modal-message__overlay')
let body = document.querySelector('body')


messageButton.addEventListener('click', function () {
	messageModal.classList.add('modal-message_opened');
	body.style.overflow = 'hidden';
});

messageButtonClose.onclick = function () {
	messageModal.classList.remove('modal-message_opened');
	body.style.overflow = 'visible';
}

messageOverlay.onclick = function() {
	messageModal.classList.remove('modal-message_opened');
	body.style.overflow = 'visible';
}
