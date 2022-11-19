// window.onload = function () {
	
	window.addEventListener("DOMContentLoaded", () => {
		
		/* Функция попапки */

		popupElem = document.querySelector('.popup')

		popupElem.addEventListener('click', (e) => {
			if(e.target.matches('.popup__wrapper') || e.target.matches('#popup_close')) {
				popupElem.classList.remove('popup__active')
			}
		})
		
		$('.results-slider').slick({
			draggable: true,
			dots: true,
			prevArrow: $('.arrow-left'),
			nextArrow: $('.arrow-right'),
			dotsClass: 'results-slider__dots',
			autoplay: false,
			autoplaySpeed: 5000,
			adaptiveHeight: true
		});
		
		AOS.init({
			// offset: 200,
			duration: 700,
			easing: 'ease-in-quad',
			// delay: 100,
		});

	/* var input = document.querySelector('#phone');

	window.intlTelInput(input, {
			utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js'
	}); */

	let input = document.querySelector("#phone"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");

	// here, the index maps to the error code returned from getValidationError - see readme
	let errorMap = ["Неверный формат", "Неверный код страны", "Слишком короткий", "Слишком длинный", "Неверный формат"];

	// initialise plugin
	let iti = window.intlTelInput(input, {
		utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
		preferredCountries: ['ua', 'sk', 'gb', 'usa']
	});

	let reset = function() {
		input.classList.remove("error");
		errorMsg.innerHTML = "";
		errorMsg.classList.add("hide");
		validMsg.classList.add("hide");
	};

	// on blur: validate
	input.addEventListener('blur', function() {
		reset();
		if (input.value.trim()) {
			if (iti.isValidNumber()) {
				validMsg.classList.remove("hide");
			} else {
				input.classList.add("error");
				let errorCode = iti.getValidationError();
				errorMsg.innerHTML = errorMap[errorCode];
				errorMsg.classList.remove("hide");
			}
		}
	});

	// on keyup / change flag: reset
	input.addEventListener('change', reset);
	input.addEventListener('keyup', reset);




/* Функция прокрутки к нужному месту */
	$("button[href*='#']").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});


	/* Функция табов */

	const tabs = document.querySelectorAll(".tabs__item");
  tabs.forEach(elem => {
    if (!elem.classList.contains("tabs__item_active")) {
      elem.addEventListener("click", () => {
        elem.classList.toggle("tabs__item_active")
				elem.querySelector('.tabs__item_icon').classList.toggle("tabs__item_icon_active")
      })
    }
  })

	


	/* Открыть все табы */
	/* tabs.forEach(elem => {
    if (!elem.classList.contains("tabs__item_active")) {
        elem.classList.toggle("tabs__item_active")
				elem.querySelector('.tabs__item_icon').classList.toggle("tabs__item_icon_active")
    }
  }) */

});