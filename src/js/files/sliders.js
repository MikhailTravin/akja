/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров
if (document.querySelector('.main-slider__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-slider__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		loop: true,
		lazy: true,
		allowTouchMove: true,
		preloadImages: true,

		// Эффекты
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},

		// Пагинация
		pagination: {
			el: '.main-slider__pagination',
			clickable: true,
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 20,
				allowTouchMove: true,
			},
			768: {
				slidesPerView: 1.5,
				spaceBetween: 20,
				allowTouchMove: true,
			},
			1212: {
				slidesPerView: 1,
				spaceBetween: 0,
				allowTouchMove: true,
			},
		},
	});
}
if (document.querySelector('.product-slider-top')) { // Указываем скласс нужного слайдера
	new Swiper('.product-slider-top', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		autoHeight: false,
		speed: 800,
		allowTouchMove: true,
		lazy: true,
		loop: true,
		// Эффекты
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.product-slider-top-arrow-prev',
			nextEl: '.product-slider-top-arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 17,
			},
			480: {
				slidesPerView: 1.7,
				spaceBetween: 17,
			},
			600: {
				slidesPerView: 2.2,
				spaceBetween: 17,
			},
			768: {
				slidesPerView: 1.7,
				spaceBetween: 17,
			},
			992: {
				slidesPerView: 2.5,
				spaceBetween: 17,
			},
			1212: {
				slidesPerView: 1,
			},
		},
	});
}
if (document.querySelector('.product-card__images')) {
	const thumbsSwiper = new Swiper('.images-product__thumbs', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 2,
		direction: 'vertical',
		speed: 800,
		allowTouchMove: true,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.images-product__arrow-prev',
			nextEl: '.images-product__arrow-next',
		},
		breakpoints: {
			0: {
				direction: 'horizontal',
			},
			991.98: {
				direction: 'vertical',
			},
		},
		on: {
		}
	});
	const mainThumbsSwiper = new Swiper('.images-product__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 2,
		direction: 'vertical',
		speed: 800,
		watchSlidesProgress: true,
		allowTouchMove: true,
		preloadImages: true,
		navigation: {
			prevEl: '.images-product__arrow-prev',
			nextEl: '.images-product__arrow-next',
		},
		breakpoints: {
			0: {
				direction: 'horizontal',
			},
			991.98: {
				direction: 'vertical',
			},
		},
	});
}
document.querySelectorAll('.product').forEach(n => {
	const tabsSwiper = new Swiper(n.querySelector('.product-slider-tabs'), { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 17,
		autoHeight: false,
		speed: 800,
		allowTouchMove: true,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.product-slider-tabs-arrow-prev'),
			nextEl: n.querySelector('.product-slider-tabs-arrow-next'),
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.3,
			},
			480: {
				slidesPerView: 1.7,
			},
			600: {
				slidesPerView: 2.2,
			},
			768: {
				slidesPerView: 1.7,
			},
			992: {
				slidesPerView: 2.5,
			},
			1212: {
				slidesPerView: 3,
			},
		},
	});
	const productSwiper = new Swiper(n.querySelector('.product-slider'), { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 17,
		speed: 800,
		allowTouchMove: true,
		lazy: true,
		freeMode: true,
		watchOverflow: true,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.product-arrow-prev'),
			nextEl: n.querySelector('.product-arrow-next'),
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.3,
			},
			480: {
				slidesPerView: 1.7,
			},
			600: {
				slidesPerView: 2.2,
			},
			768: {
				slidesPerView: 2.8,
			},
			992: {
				slidesPerView: 3.8,
			},
			1212: {
				slidesPerView: 4,
			},
		},
	});
});
if (document.querySelector('.top-tabs-system-block__slider')) { // Указываем скласс нужного слайдера
	new Swiper('.top-tabs-system-block__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		autoHeight: false,
		speed: 800,
		allowTouchMove: true,
		spaceBetween: 17,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.top-tabs-system-block__arrow-prev',
			nextEl: '.top-tabs-system-block__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1212: {
				slidesPerView: 3,
			},
		},
	});
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}