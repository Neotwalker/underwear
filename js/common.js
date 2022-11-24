$(function() {


	let container = $(".menu");
	let body = $(".menu--wrapper__external");
	$(".hamburger").click(() => {
		$("body").css('overflow-y', 'hidden');
		$("#my-menu").toggleClass('menu--open');
		$(".menu--wrapper__external").toggleClass("overlay");
	});

	$('.menu--close').click(function() {
		$("body").css('overflow-y', 'scroll');
    $('.menu').removeClass('menu--open');
		$(".menu--wrapper__external").removeClass("overlay");
	});

	$('.menu--wrapper__external li').click(function() {
		$("body").css('overflow-y', 'scroll');
    $('.menu').removeClass('menu--open');
		$(".menu--wrapper__external").removeClass("overlay");
	});

	$(document).mouseup(function (e) {
    if (container.has(e.target).length === 0){
			$("body").css('overflow-y', 'scroll');
      container.removeClass('menu--open');
			body.removeClass("overlay");
    }
  });
	$('.brands--carousel').owlCarousel({
		loop: true,
		autoplay : true,
		autoplayTimeout : 4000,
		margin: 30,
		nav: false,
		dots: false,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			350: {
				items: 2
			},
			768: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	
	$('.slider-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		loop: false,
		centerMode: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		dots: false,
		arrows: false
	});

	$('.slider-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		loop: false,
		centerMode: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		dots: false,
		arrows: false
	});

	$('.slider-3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		loop: false,
		centerMode: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		dots: false,
		arrows: false
	});

	if ($(window).width() < 1200) {
		$(".clothes--wrapper.owl-carousel").owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			margin: 20,
			navText: ['<img src="img/arrow-left.png">', '<img src="img/arrow-right.png">'],
			responsive: {
				0: {
					items: 1
				},
				800: {
					items: 2
				},
				1100: {
					items: 3
				}
			}
		});
	}

});
