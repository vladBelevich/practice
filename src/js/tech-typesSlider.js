import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination])

const brandsSlider = document.querySelector('.tech-types__swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && brandsSlider.dataset.mobile == 'false') {
		mySwiper = new Swiper(brandsSlider, {
			pagination: {
				el: '.tech-types__swiper-pagination',
				clickable: false,
			},
			slidesPerView: 'auto',
			spaceBetween: 16,
		});

		brandsSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		brandsSlider.dataset.mobile = 'false';

		if(brandsSlider.classList.contains('swiper-initialized')){
			mySwiper.destroy();
		}

	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
})