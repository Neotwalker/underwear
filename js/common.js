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

	// $(document).mouseup(function (e) {
  //   if (container.has(e.target).length === 0){
	// 		$("body").css('overflow-y', 'scroll');
  //     container.removeClass('menu--open');
	// 		body.removeClass("overlay");
  //   }
  // });

	$('.brands--carousel').owlCarousel({
		loop: true,
		autoplay : true,
		autoplayTimeout : 2000,
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
	
	$('.underwear--slider').owlCarousel({
		loop: true,
		autoplay : true,
		autoplayTimeout : 3000,
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
			1000: {
				items: 3
			}
		}
	});

	$('.sale--slider').owlCarousel({
		loop: false,
		autoplay : true,
		autoplayTimeout : 3000,
		margin: 30,
		nav: false,
		dots: false,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
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

	let container_sale = $(".call--callback");
	let body_sale = $(".call");
	// $(document).mouseup(function (e) {
  //   if (container_sale.has(e.target).length === 0){
	// 		$("body").css('overflow-y', 'scroll');
  //     container_sale.removeClass('open');
	// 		body_sale.removeClass("overlay");
  //   }
  // });
	$('.mobal--button').click(function(){
		$("body").css('overflow-y', 'hidden');
		container_sale.toggleClass('open');
		body_sale.toggleClass("overlay");
	});

	$('.call .menu--close').click(function() {
		$("body").css('overflow-y', 'scroll');
    container_sale.removeClass('open');
		body_sale.removeClass("overlay");
	});


	$("form.call--callback, form.form--buy").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});
