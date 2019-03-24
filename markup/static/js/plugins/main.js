
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	popup ();
	// M.AutoInit();
	// forms();

	var swiper = new Swiper('.slider', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});
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
				console.log(index);
				$(".progress-item").removeClass("active");
				$(".progress-item:nth-child("+index+")").addClass("active");
			},
			slidePrevTransitionStart: function () {
				var index = +$(".progress__slide.swiper-slide-active").index() + 1;
				console.log(index);
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
			it.closest(".tabs-container").find("." + href).addClass('active');
			it.closest('.tabs-container').find("." + href + " input").val('');
			it.closest('.tabs-container').find("." + href + " input").removeClass("is-focus");
		});
	});
	
	$('.phone-mask').mask("+ 7 000 000 00 00");

	$(".progress-item").mouseenter(function() {
		var ref = $(this).index();
		swiperback.slideTo(ref);
		$(".progress-item").removeClass('active');
		$(this).addClass('active');
	});


	
	
	// var i = 0;
	// $(".m-range").each(function() {
	// 	i++;
	// 	console.log(rangeName+i);
	// 	var it = $(this);
	// 	var rangeName = "m-range";
	// 	var slider = document.getElementsByClassName(rangeName[i]);
	// 	var rangeMin = $(".m-range").data("min")
	// 	var rangeMax = $(".m-range").data("max")
	// 	var rangeStep = $(".m-range").data("step")
	// 	// $(".output-left").text(parseFloat(rangeMin).toFixed(0));
	// 	// $(".output-right").text(parseFloat(rangeMax).toFixed(0));
	// 	noUiSlider.create(slider, {
	// 		start: [rangeMin, rangeMax],
	// 		connect: true,
	// 		step: rangeStep,
	// 		range: {
	// 			'min': rangeMin,
	// 			'max': rangeMax
	// 		},
	// 		format: wNumb({
	// 			decimals: 0
	// 		})
	// 	});
	
	// 	// $(".noUi-handle-lower").mousemove(function() {
	// 	// 	var val = $(this).find("span").text();
	// 	// 	$(".output-left").text(parseFloat(val).toFixed(0));
	// 	// });
	// 	// $(".noUi-handle-upper").mousemove(function() {
	// 	// 	var val = $(this).find("span").text();
	// 	// 	$(".output-right").text(parseFloat(val).toFixed(0));
	// 	// });
	// });


	$(".sidebar").each(function() {
		var height = $(this).find(".sidebar__container").innerHeight();
		$(this).css("min-height", height);
	});



	// for (var i = 1; i <= $(".m-range").length; i++) {
	// 	var it = $(this);
	// 	var rangeName = "m-range";
	// 	var slider = document.getElementById("m-range" + String(i));
	// 	var rangeMin = $("#m-range" + i).data("min")
	// 	var rangeMax = $("#m-range" + i).data("max")
	// 	var rangeStep = $("#m-range" + i).data("step")
		
	// 	// $(".output-left").text(parseFloat(rangeMin).toFixed(0));
	// 	// $(".output-right").text(parseFloat(rangeMax).toFixed(0));
	// 	$("#m-range" + i).closest(".range-container").find(".output-left").text(rangeMin);
	// 	$("#m-range" + i).closest(".range-container").find(".output-right").text(rangeMax);
	// 	noUiSlider.create(slider, {
	// 		start: [rangeMin, rangeMax],
	// 		connect: true,
	// 		step: rangeStep,
	// 		range: {
	// 			'min': rangeMin,
	// 			'max': rangeMax
	// 		},
	// 		format: wNumb({
	// 			decimals: 0
	// 		})
	// 	});
	// 	$(".m-range").each(function() {
	// 		var it = $(this);
	// 		$(this).find(".noUi-handle-lower").mousemove(function() {
	// 			var val = it.find(".noUi-handle-lower span").text();
	// 			it.closest(".range-container").find(".output-left").text(parseFloat(val).toFixed(0));
	// 		});
	// 		$(this).find(".noUi-handle-upper").mousemove(function() {
	// 			var val = it.find(".noUi-handle-upper span").text();
	// 			it.closest(".range-container").find(".output-right").text(parseFloat(val).toFixed(0));
	// 		});
	// 	});
	// };
	// for (var i = 1; i <= $(".m-range-single").length; i++) {
	// 	var it = $(this);
	// 	var rangeName = "m-range-single";
	// 	var slider = document.getElementById("m-range-single" + String(i));
	// 	var rangeMin = $("#m-range-single" + i).data("min")
	// 	var rangeMax = $("#m-range-single" + i).data("max")
	// 	var rangeStep = $("#m-range-single" + i).data("step")
		
	// 	// $(".output-left").text(parseFloat(rangeMin).toFixed(0));
	// 	// $(".output-right").text(parseFloat(rangeMax).toFixed(0));
	// 	$("#m-range-single" + i).closest(".range-container").find(".output-right").text(rangeMax.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	// 	noUiSlider.create(slider, {
	// 		start: [rangeMax],
	// 		step: rangeStep,
	// 		connect: "lower",
	// 		range: {
	// 			'min': rangeMin,
	// 			'max': rangeMax
	// 		},
	// 		format: wNumb({
	// 			decimals: 0
	// 		})
			
	// 	});
	// 	slider.noUiSlider.on('update', function () {

	// 		var val = slider.noUiSlider.get();
	// 		console.log(val)
	// 	});
	// 	$(".m-range-single").each(function() {
	// 		var it = $(this);
	// 		$(this).find(".noUi-handle-lower").mousemove(function() {
	// 			var val = it.find(".noUi-handle-lower span").text();
	// 			it.closest(".range-container").find(".output-right").text(parseFloat(val).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	// 		});
	// 	});
	// };

	// function calculate() {
		
	// 	$(".calc-price-container").find(".noUi-handle-lower").mousemove(function() { 
	// 		// var calcPercent    = +$(".calc-percent").text();
	// 		// var calcPrice      = $(".calc-price").text().replace(/\s/g, '');
	// 		// var result = +calcPrice / 100 * +calcPercent;
	// 		// var resultNumber = +result.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').toFixed(0);
	// 		// $(".calc-percent-result").text(resultNumber);
	// 	});
	// 	$(".calc-vznos").find(".noUi-handle-lower").mousemove(function() { 
	// 		var calcPercent    = +$(".calc-percent").text();
	// 		var calcPrice      = +$(".calc-price").text().replace(/\s/g, '');
	// 		console.log(calcPercent);
	// 		console.log(calcPrice);
	// 		result = +calcPrice / 100 * +calcPercent;
	// 		$(".calc-percent-result").text(result);
	// 	});
	// 	$(".calc-percent-year-container").find(".noUi-handle-lower").mousemove(function() { 
	// 		var calcPercent    = +$(".calc-percent-year").text();
	// 		var calcPrice      =  +$(".calc-price").text();
	// 		// var calcPrice = +$(".calc-price").text();
	// 		// $(".calc-result-month span").text(parseFloat(calcPrice / 100 * calcPercent / 12).toFixed(0));
	// 	});
	// }
	// calculate();

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
			$(".calc-credit-result").text(parseFloat(bezvznosa).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')  + " руб.");
			var monthTime = time * 12;
			$(".calc-result-month").text(parseFloat(bezvznosa / monthTime).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " руб.");
		});
	})

	// for (var i = 1; i <= $(".m-range-reverse").length; i++) {
	// 	var it = $(this);
	// 	var rangeName = "m-range-reverse";
	// 	var slider = document.getElementById("m-range-reverse" + String(i));
	// 	var rangeMin = $("#m-range-reverse" + i).data("min")
	// 	var rangeMax = $("#m-range-reverse" + i).data("max")
	// 	var rangeStep = $("#m-range-reverse" + i).data("step");
		
	// 	// $(".output-left").text(parseFloat(rangeMin).toFixed(0));
	// 	// $(".output-right").text(parseFloat(rangeMax).toFixed(0));
		
	// 	$("#m-range-reverse" + i).closest(".range-container").find(".output-left").text('5000000');

	// 	noUiSlider.create(slider, {
	// 		start: [rangeMax / 2],
	// 		step: rangeStep,
	// 		connect: "upper",
	// 		range: {
	// 			'min': rangeMin,
	// 			'max': rangeMax
	// 		},
	// 		format: wNumb({
	// 			decimals: 0
	// 		})
	// 	});
	// 	console.log("#m-range-reverse" + i);
	// 	$(".m-range-reverse").each(function() {
	// 		var it = $(this);
	// 		$(this).find(".noUi-handle-lower").mousemove(function() {
	// 			var val = it.find(".noUi-handle-lower span").text();
	// 			console.log(val);
	// 			it.closest(".range-container").find(".output-left").text(parseFloat(val).toFixed(0));
	// 		});
	// 	});
	// };

	


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

	new WOW().init();
	
	$('.hard__item').each(function() {
		var it = $(this);
		it.mouseenter(function() {
			var offset = it.position().left.toFixed('0');
			var offsetTop = it.closest(".hard__floor").position().top.toFixed('0');
			console.log(offsetTop);
			it.closest(".hard").find(".about__temp").css({
				"left": +offset + 10,
				"top": +offsetTop + 25,
				"opacity": 1,
				"visibility": "visible",
			});
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
	});

	$(".m-bg-cont").each(function() {
		var image = $(this).find("img").attr('src');
		$(this).css("background-image", "url("+image+")")
	});


	$(".scene").each(function() {
			var scene = $(this).get(0);
			var parallaxInstance = new Parallax(scene);
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				number: {
					digits: true,
					required: false,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
					}
				});
			},  
         });
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