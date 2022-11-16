$(function() {

	$(document).on('click', 'nav a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 130
    }, 900);
	});

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
	// $('#my-menu').mmenu({
	// 	extensions: [ 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
	// 	navbar: {
	// 		title: '<img src="img/logo.svg" alt="ваше лого">'
	// 	},
	// 	offCanvas: {
	// 		position: 'right'
	// 	},
	// 	onClick : {
	// 		close          : true,
	// 		preventDefault : false,
	// 	},
	// 	pageScroll : {
	// 		scroll : true, // прокрутка к якорю
	// 		update : true, //прокручивать, даже если пункт обозначен как активный
	// 		scrollOffset : 300 // отступ от якоря, по умолчанию 0. У меня почему-то не заработал
	// 	}
	// });

	// let api = $('#my-menu').data('mmenu');
	// api.bind('opened', function(){
	// 	$('.hamburger').addClass('is-active');
	// }).bind('closed', function(){
	// 	$('.hamburger').removeClass('is-active');
	// });

	$('.header__carousel').owlCarousel({
		loop: true,
		// autoplay : true,
		autoplayTimeout : 4000,
		nav: false,
		dots: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
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
