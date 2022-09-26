import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination])

const priceSlider = document.querySelector('.price__slider');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && priceSlider.dataset.mobile == 'false') {
		mySwiper = new Swiper(priceSlider, {
			pagination: {
				el: '.price__list_swiper-pagination',
				clickable: false,
			},
			slidesPerView: 'auto',
			spaceBetween: 16,
		});

		priceSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		priceSlider.dataset.mobile = 'false';

		if(priceSlider.classList.contains('swiper-initialized')){
			mySwiper.destroy();
		}

	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
})
