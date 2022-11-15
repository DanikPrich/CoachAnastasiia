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
}