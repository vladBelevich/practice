let button = document.querySelector('.brands__readMore');

button.onclick = function () {
	
let area = document.querySelector('.brands__list');
	area.classList.toggle('closed');
	button.classList.toggle('down');
	if (area.classList.contains('closed')) {
		button.textContent = 'Показать все';
	} else {
		button.textContent = 'Скрыть';
	}

};

