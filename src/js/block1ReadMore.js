let button = document.querySelector('.block1__readMore');

button.onclick = function () {

    let area = document.querySelector('.block1__text');
    area.classList.toggle('block1__text_closed');
    button.classList.toggle('down');
    if (area.classList.contains('block1__text_closed')) {
        button.textContent = 'Читать далее';
    } else {
        button.textContent = 'Скрыть';
    }

};

