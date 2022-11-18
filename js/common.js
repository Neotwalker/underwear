$(function() {

	$(document).on('click', 'nav a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 130
    }, 900);
	});

	function handler(event) {
		let hash = typeof event === 'string' ? event : event.target.hash;
		if (!hash){
			return
		}

		let tag = $(hash);

		if (tag.length) {
			let offset = tag.offset().top - 130;
			$('html, body').stop().animate({ scrollTop: offset
			}, 500);
		}
	}

	$('#my-menu a, .footer--menu a').on("click", handler);
	$(function() {
		handler(location.hash);
	});

	var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting) {
        $(entry.target).addClass('active');
      } else {
        $(entry.target).removeClass('active');
      }
    });
  }, {threshold: 1});
  $('.advantages--wrapper__item').each(function(){
    observer.observe(this);
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
	$('.header__carousel').owlCarousel({
		loop: true,
		autoplay : true,
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
