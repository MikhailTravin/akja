import { bodyLock, bodyUnlock, _slideUp, _slideToggle, _slideDown } from "../files/functions.js";



//========================================================================================================================================================


//Каталог скролл главная 
function scrollCatalogHeader() {

	let scrollCatalog = document.querySelector('.catalog-header__block');

	if (scrollCatalog) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let top = 0;
		let drag = false;
		let coorX = 0;
		let coorY = 0;

		scrollCatalog.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
			coorY = e.pageY;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scrollCatalog.scrollLeft;
			top = scrollCatalog.scrollTop;
		});

		scrollCatalog.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
				this.scrollTop = top - (e.pageY - coorY) * speed;
			}
		});
	}

};
scrollCatalogHeader();

//========================================================================================================================================================

//Табы скролл
function scrollTabs() {

	let scrollTabs = document.querySelector('.tabs-main-home__navigation');

	if (scrollTabs) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let top = 0;
		let drag = false;
		let coorX = 0;
		let coorY = 0;

		scrollTabs.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
			coorY = e.pageY;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scrollTabs.scrollLeft;
			top = scrollTabs.scrollTop;
		});

		scrollTabs.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
				this.scrollTop = top - (e.pageY - coorY) * speed;
			}
		});

	}

};
scrollTabs();

function scrollTabsProduct() {

	let scrollTabsProduct = document.querySelector('.tabs__navigation');

	if (scrollTabsProduct) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let top = 0;
		let drag = false;
		let coorX = 0;
		let coorY = 0;

		scrollTabsProduct.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
			coorY = e.pageY;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scrollTabsProduct.scrollLeft;
			top = scrollTabsProduct.scrollTop;
		});

		scrollTabsProduct.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
				this.scrollTop = top - (e.pageY - coorY) * speed;
			}
		});

	}

};
scrollTabsProduct();

//========================================================================================================================================================

//Скролл бренды
function scrollBrands() {

	let scrollBrand = document.querySelector('.brands__body');

	if (scrollBrand) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let drag = false;
		let coorX = 0;

		scrollBrand.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scrollBrand.scrollLeft;
		});

		scrollBrand.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
			}
		});

	}

};
scrollBrands();

//========================================================================================================================================================

//Скролл конфигуратор системного блока
function scrollSystem() {

	let scrollSystem = document.querySelector('.tabs-system-block__navigation');

	if (scrollSystem) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let drag = false;
		let coorX = 0;

		scrollSystem.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scrollSystem.scrollLeft;
		});

		scrollSystem.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
			}
		});

	}

};
scrollSystem();

//========================================================================================================================================================

//Скролл международные заказы
function scrollOrders() {

	let scrollOrders = document.querySelector('.photo-checkout__block');

	if (scrollOrders) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let drag = false;
		let coorX = 0;

		scrollOrders.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scrollOrders.scrollLeft;
		});

		scrollOrders.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
			}
		});

	}

};
scrollOrders();

//========================================================================================================================================================

//TIMER//

function timer(id, deadLine) {
	function getTimeRemaining(endTime) {
		let DAYS, HOURS, MINUTES, SECONDS;

		const t = Date.parse(endTime) - Date.parse(new Date());

		if (t <= 0) {
			DAYS = 0;
			HOURS = 0;
			MINUTES = 0;
			SECONDS = 0;
		} else {
			DAYS = getZero(Math.floor(t / 1000 / 60 / 60 / 24));
			HOURS = getZero(Math.floor(t / 1000 / 60 / 60) % 24);
			MINUTES = getZero(Math.floor(t / 1000 / 60) % 60);
			SECONDS = Math.floor(t / 1000) % 60;
		}

		return {
			t,
			DAYS,
			HOURS,
			MINUTES,
			SECONDS,
		};
	}

	function getZero(num) {
		if (num >= 0 && num <= 10) {
			return `0${num}`;
		}

		return num;
	}

	function setClock(selector, endTime) {
		const days = document.querySelectorAll('.time-count__days .time-count__val');
		const hours = document.querySelectorAll('.time-count__hours .time-count__val');
		const minutes = document.querySelectorAll('.time-count__minutes .time-count__val');
		const seconds = document.querySelectorAll('.time-count__seconds .time-count__val');

		updateClock();

		function updateClock() {

			const timeInterval = setInterval(updateClock, 1000);
			const t = getTimeRemaining(endTime);

			days.forEach(day => {
				day.innerHTML = t.DAYS.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});
			hours.forEach(hour => {
				hour.innerHTML = t.HOURS.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});
			minutes.forEach(minute => {
				minute.innerHTML = t.MINUTES.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});
			seconds.forEach(second => {
				second.innerHTML = t.SECONDS.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});

			if (t.t <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(id, deadLine);
}

//Вызов функции.
timer('.timer', '2023-04-31');

//========================================================================================================================================================

//Каталог ПК
function catalogPc() {

	const catalogPcItems = document.querySelectorAll('.catalog-header__items');

	if (catalogPcItems) {
		if (catalogPcItems.length > 0) {
			catalogPcItems.forEach(function (e) {
				e.addEventListener('mouseenter', function (e) {
					e.target
						.closest('.catalog-header__link')
						.querySelector('.catalog-header__subtitle')
						.classList.add('_active');
				});

				e.addEventListener('mouseleave', function (e) {
					e.target
						.closest('.catalog-header__link')
						.querySelector('.catalog-header__subtitle')
						.classList.remove('_active');
				});
			});
		}
	}
}
catalogPc()

//========================================================================================================================================================

//Загрузка изображений с превью
const cartBlockInputFile = document.querySelectorAll('.photo-checkout__input-file');
if (cartBlockInputFile) {
	cartBlockInputFile.forEach(el => {
		el.addEventListener('change', (event) => {
			var file = event.target.files; // FileList object
			for (var i = 0, f; f = file[i]; i++) {
				// Only process image files.
				if (!f.type.match('image.*')) {
					alert("Image only please....");
				}
				var reader = new FileReader();
				const inputImg = document.querySelectorAll('.photo-checkout__input-file-img');
				var span = document.createElement('span');
				const inputRemove = document.querySelectorAll('.photo-checkout__input-file-remove span');
				// Closure to capture the file information.
				reader.onload = (function (theFile) {
					return function cartBlockFileMask(e) {
						// Render thumbnail.
						span.className = 'preview'
						span.innerHTML = [
							'<div class="photo-checkout__input-file-remove _icon-close">Удалить</div>' +
							'<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'
						].join('');

						inputImg.forEach(img => {
							img.classList.add("_active")
							img.insertBefore(span, null);
						});
					};



				})(f);


				if (inputRemove) {
					inputRemove.forEach(btn => {
						btn.addEventListener('click', () => {
							const item = btn.closest('.preview');
							item.remove();
							event.value = ''; // ключевая строка
						});
					});
				}



				reader.readAsDataURL(f);
			};
		});

	});
};

//========================================================================================================================================================

//Попап статус ремонта

const repairStatusButton = document.querySelector('.repair-status__button');

if (repairStatusButton) {
	const repairStatus = document.querySelector('.repair-status__status');
	const repairStatusBlock = document.querySelector('.repair-status__block');
	repairStatusButton.addEventListener("click", function (e) {
		repairStatus.classList.add("_active")
		repairStatusBlock.classList.add("_active")
	});
}

//========================================================================================================================================================

//Табы фильтр

const tabFilterTitles = document.querySelectorAll('.tabs-filter__title');

if (tabFilterTitles) {
	tabFilterTitles.forEach(title => {
		title.addEventListener("click", function (e) {
			tabFilterTitles.forEach(el => { el.classList.remove('_tab-active'); });
			title.classList.add('_tab-active')
			document.documentElement.classList.toggle("_tab-active")
		});
	});
}

//========================================================================================================================================================

//показать еще

const catalogHeaderBtnMore = document.querySelector('.catalog-header__more');

if (catalogHeaderBtnMore) {
	const catalogHeaderList = document.querySelector('.catalog-header__list');
	const catalogHeaderMenus = document.querySelectorAll('.catalog-header-sorted');
	catalogHeaderBtnMore.addEventListener("click", function (e) {
		catalogHeaderMenus.forEach(block => {
			block.classList.toggle("_showmore-active")
		});
		catalogHeaderBtnMore.classList.toggle("_showmore-active")
		catalogHeaderList.classList.toggle("_showmore-active")
	});
}

//========================================================================================================================================================

function search() {
	const searchInput = document.querySelector('.bottom-header__input');
	if (searchInput) {
		searchInput.addEventListener("click", function (e) {
			document.documentElement.classList.add("search-open")
		});
		window.addEventListener('click', e => {
			const target = e.target
			if (!target.closest('.bottom-header__input') && !target.closest('.bottom-header__inputs')) {
				document.documentElement.classList.remove("search-open")
			}
		})
	}
}

search()