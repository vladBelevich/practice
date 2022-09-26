let button = document.querySelector('.tech-types__readMore');

button.onclick = function () {
	
let area = document.querySelector('.tech-types__list');
	area.classList.toggle('closed');
	button.classList.toggle('down');
	if (area.classList.contains('closed')) {
		button.textContent = 'Показать все';
	} else {
		button.textContent = 'Скрыть';
	}

};