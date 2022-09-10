const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			pagination: {
				el: '.swiper-pagination',
				clickable: false,
			},
			slidesPerView: 'auto',
			spaceBetween: 16,
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		slider.dataset.mobile = 'false';

		mySwiper.destroy();
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
})

