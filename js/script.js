window.onload = function () {
	AOS.init({
		// offset: 200,
		duration: 700,
		easing: 'ease-in-quad',
		// delay: 100,
	});

	$('.results-slider').slick({
		draggable: false,
		dots: true,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
		dotsClass: 'results-slider__dots',
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true
	});











	/* function addSlickOnPrice() {
		$('.services__wrapper').slick({
			draggable: true,
			dots: true,
			// prevArrow: $('.arrow-left'),
			// nextArrow: $('.arrow-right'),
			dotsClass: 'results-slider__dots',
			autoplay: true,
			autoplaySpeed: 5000,
			adaptiveHeight: true,
		});
	}

	function removeSlickFromPrice() {
		$('.services__wrapper').slick('unslick')
	}

	if(window.innerWidth < 1600) {
		addSlickOnPrice();
	}

	addEventListener("resize", (event) => {

		if(event.target.innerWidth < 1600) {
			addSlickOnPrice();
		} else {
			removeSlickFromPrice()
		}
	}); */

	/* $('.slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1815,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	}); */

}