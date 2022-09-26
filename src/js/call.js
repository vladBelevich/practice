let callButton = document.querySelector('.header__call')
let callModal = document.querySelector('.modal-call');
let callButtonClose = document.querySelector('.modal-call__close')
let callOverlay = document.querySelector('.modal-call__overlay')
let body = document.querySelector('body')


callButton.addEventListener('click', function () {
	callModal.classList.add('modal-call_opened');
	body.style.overflow = 'hidden';
});


callButtonClose.onclick = function () {
	callModal.classList.remove('modal-call_opened');
	body.style.overflow = 'visible';
}

callOverlay.onclick = function() {
	callModal.classList.remove('modal-call_opened');
	body.style.overflow = 'visible';
}
