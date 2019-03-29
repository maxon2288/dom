
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	popup ();
	// M.AutoInit();
	// forms();

	var swiper = new Swiper('.slider', {
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});
	var swiper = new Swiper('.video-slider-container', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.video-next',
			prevEl: '.video-prev',
		},
	});

	if ($(window).width() <= 1400) {
		var removeDiv = $(".hard__table").remove();
		removeDiv.appendTo(".hard__mobile-container");
	}
	var swiper = new Swiper('.quality-slider', {
		spaceBetween: 30,
		slidesPerView: "auto",
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: '.quality-next',
			prevEl: '.quality-prev',
		},
		breakpoints: {
			425: {
				spaceBetween: 10,
			}
		}
	});
	var swiper = new Swiper('.ipo-slider', {
		spaceBetween: 30,
		slidesPerView: "auto",
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: '.ipo-next',
			prevEl: '.ipo-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			425: {
				slidesPerView: 1,
			}
		}
	});

	for (var i = 1; i <= $(".hod__item").length; i++) {
		var elem = '.hod-slider' + i;
		var elemPrev = '.hod-prev' + i;
		var elemNext = '.hod-next' + i;
		
		var hodslider = new Swiper(elem, {
			spaceBetween: 30,
			slidesPerView: 4,
			navigation: {
				nextEl: elemNext,
				prevEl: elemPrev,
			},
			breakpoints: {
				1023: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				425: {
					slidesPerView: 1,
				},
			},
		});
	}
	

	
	if ($(".content").height() > $(".sidebar__container").height()) {
		$(".sidebar__container").stick_in_parent();
	}
	$(document).resize(function() {
		if ($(".content").height() > $(".sidebar__container").height()) {
			$(".sidebar__container").stick_in_parent();
		}
	});

	
	var swiperback = new Swiper('.back-slider', {
		spaceBetween: 60,
		slidesPerView: 1,
		navigation: {
			nextEl: '.back-next',
			prevEl: '.back-prev',
		},
		on: {
			slideNextTransitionStart: function () {
				var index = +$(".progress__slide.swiper-slide-active").index() + 1;
				$(".progress-item").removeClass("active");
				$(".progress-item:nth-child("+index+")").addClass("active");
			},
			slidePrevTransitionStart: function () {
				var index = +$(".progress__slide.swiper-slide-active").index() + 1;
				$(".progress-item").removeClass("active");
				$(".progress-item:nth-child("+index+")").addClass("active");
			},
		}
	});



	$(".tabs").each(function() {
		$('.tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs-container").find(".tab").removeClass("active");
			it.addClass("active");
			$(".cont-tab").removeClass("active");
			$("." + href).each(function () {
				it.closest(".tabs-container").find("." + href).addClass('active');
				it.closest('.tabs-container').find("." + href + " input").val('');
				it.closest('.tabs-container').find("." + href + " input").removeClass("is-focus");
			});
		});
	});
	
	$('.phone-mask').mask("+ 7 000 000 00 00");

	$(".progress-item").mouseenter(function() {
		var ref = $(this).index();
		swiperback.slideTo(ref);
		$(".progress-item").removeClass('active');
		$(this).addClass('active');
	});

	$(".sidebar").each(function() {
		var height = $(this).find(".sidebar__container").innerHeight();
		$(this).css("min-height", height);
	});

	$(document).ready(function(){
		$('.collapsible').collapsible();
	});

	$('.m-range-single').each(function(){
		var slider = $(this).get(0);
		var elem = $(this)
		noUiSlider.create(slider, {
			start: [+$(this).closest('.range-container').find('.output-right').text()],
			step: $(this).data('step'),
			connect: "lower",
			range: {
				'min': $(this).data('min'),
				'max': $(this).data('max')
			},
			format: wNumb({
				decimals: 0
			})
		});
		slider.noUiSlider.on('update', function () {
			var x = +slider.noUiSlider.get();
			elem.closest('.range-container').find('.output-right').text(x.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ' ));
			elem.closest('.range-container').find('.output-right.calc-percent-year').text(x.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')+ "%");
			elem.closest('.range-container').find('.output-right.calc-vznos-prec').text(x.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')+ "%");
			elem.closest('.range-container').find('.output-right.calc-time').text(x.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')+ " лет");
			
			var year		= +$('.calc-percent-year').text().replace(/\D+/g,""),
			price	 	= +$('.calc-price').text().replace(/\D+/g,""),
			vznos	 	= +$('.calc-vznos-result').text().replace(/\D+/g,""),
			vznos_procent = $('.calc-vznos-prec').text().replace(/\D+/g,""),
			time		= +$('.calc-time').text().replace(/\D+/g,"");
			var vznosResult = price / 100 * vznos_procent;
			var bezvznosa = price - vznosResult;
			var monthPrice = bezvznosa / year * 12;
			$(".calc-vznos-result").text(parseFloat(vznosResult).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
			var monthTime = time * 12;
			$(".calc-credit-result").text(parseFloat(bezvznosa).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')  + " руб.");
			var percentPerYear = +$(".calc-percent-year").text().replace(/\D+/g,"");
			var monthResult = bezvznosa / monthTime;
			procOstatok = 100 - year;
			var summaProcent = bezvznosa / 100 * year;
			var summaProcentMonth = summaProcent / 12;
			$(".calc-result-month").text(parseFloat(monthResult).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " руб.");
		});
	})

	$('.m-range-double').each(function(){
		var slider = $(this).get(0);
		var elem = $(this);
		var min = $(this).attr("data-min");
		var max = $(this).attr("data-max");
		noUiSlider.create(slider, {
			start: [min, max],
			step: $(this).data('step'),
			connect: true,
			range: {
				'min': $(this).data('min'),
				'max': $(this).data('max')
			},
			format: wNumb({
				decimals: 0
			})
		});
		slider.noUiSlider.on('update', function () {
			// var x = +slider.noUiSlider.get();
			// elem.closest('.range-container').find('.output-right').text(x.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ' ));
			// elem.closest('.range-container').find('.output-right').text(x.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ' ));
			var valmin = +elem.closest('.range-container').find('.noUi-handle-lower span').text();
			var valmax = +elem.closest('.range-container').find('.noUi-handle-upper span').text();
			elem.closest('.range-container').find('.output-left').text(valmin.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ' ));			
			elem.closest('.range-container').find('.output-right').text(valmax.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ' ));			
		});
	})


	$(document).ready(function() {
		$('select').niceSelect();
	});

	function parallax() {
		var $slider = document.getElementById("slider");
	
		var yPos = window.pageYOffset / $slider.dataset.speed;
		yPos = -yPos;
		
		var coords = '50% '+ yPos + 'px';
		
		$slider.style.backgroundPosition = coords;
	}
	
	window.addEventListener("scroll", function(){
		parallax();	
	});

	$(".lightgallery").lightGallery({
		videojsOptions: {
			autoplay: true,
		}
	}); 

	var deg = $(".popup__direction").attr("data-rotate");
	var rotation = "rotate(" + deg + "deg)";
	$(".popup__hata-direction").css("transform", rotation);

	new WOW().init();
	
	$('.free').each(function() {
		var it = $(this);
		it.mouseenter(function() {
			var offset = it.position().left.toFixed('0');
			var offsetTop = it.closest(".hard__floor").position().top.toFixed('0');
			var img = it.attr("data-img");
			var title = it.attr("data-title");
			var ploshad = it.attr("data-ploshad");
			var price = it.attr("data-price");
			it.closest(".hard").find(".about__temp").css({
				"left": +offset + 10,
				"top": +offsetTop + 25,
				"opacity": 1,
				"visibility": "visible",
			});
			$(".about__temp-title").text(title);
			$(".about__light").text(ploshad);
			$(".about__green").text(price);
			$(".about__img img").attr("src", img);
		});
		it.closest(".hard").find(".about__temp").mouseleave(function() {
			it.closest(".hard").find(".about__temp").css({
				"visibility": "hidden",
				"opacity": "0",
			});
		});
		it.closest(".hard__home").mouseleave(function() {
			it.closest(".hard").find(".about__temp").css({
				"visibility": "hidden",
				"opacity": "0",
			});
		});
		$(".busy").mouseenter(function() {
			it.closest(".hard").find(".about__temp").css({
				"visibility": "hidden",
				"opacity": "0",
			});
		});
	});

	$(".m-bg-cont").each(function() {
		var image = $(this).find("img").attr('src');
		$(this).css("background-image", "url("+image+")")
	});


	$(".scene").each(function() {
			var scene = $(this).get(0);
			var parallaxInstance = new Parallax(scene);
	});

	

	 $(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(".number-result").text($input.val());
    });
	 
})