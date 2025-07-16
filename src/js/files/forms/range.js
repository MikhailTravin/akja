// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('.rating__range');
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [30000, 344586],
			connect: true,
			range: {
				'min': [0],
				'max': [600000]
			}
		});

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', function () {
			priceSlider.noUiSlider.set([this.value, null]);
		});
		priceEnd.addEventListener('change', function () {
			priceSlider.noUiSlider.set([null, this.value]);
		});
		priceSlider.noUiSlider.on('update', function (values, handle) {

			var value = values[handle];

			if (handle) {
				priceEnd.value = value;
			} else {
				priceStart.value = value;
			}
		});

		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
		*/
	}
}
rangeInit();
