//  slides 
	$('#slideshow0').swiper({
		mode: 'horizontal',
		slidesPerView: 1,
		pagination: '.slideshow0',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 0,
		autoplay: 4000,
		autoplayDisableOnInteraction: true,
		loop: true
	});	
// products 
 type="text/javascript"
		$('#tabs a').tabs();

	const direct = $('html').attr('dir');
	const items = 1;
	$(".slideTestimonial").each(function (){
				const sliderOptions = {
					loop: true,
					center: true,
					nav:  false ,
					navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
					dots:  true ,
					items: items,
					autoplay:  true ,
					autoplay: false,
					autoplayTimeout: 3000,
					responsiveRefreshRate: 200,
					responsive: {
						0: { items: 1 },
						992: { items: items }
					}
				};
	
				if (direct == 'rtl') sliderOptions['rtl'] = true;
					$(this).owlCarousel(sliderOptions);
			});
//blogs 
	$(document).ready(function() {
		setBlogCarousel();
	});
	function setBlogCarousel() {
		const direc = $('html').attr('dir');
	
		$('.blog-carousel').each(function () {
			if ($(this).closest('#column-left').length == 0 && $(this).closest('#column-right').length == 0) {
				$(this).addClass('owl-carousel owl-theme');
					const items = $(this).data('items') || 3;
					const sliderOptions = {
						loop: false,
						nav: true,
						navText: ['<i class="icon-left-arrow"></i>','<i class="icon-send"></i>'],
						dots: false,
						items: items,
						responsiveRefreshRate: 200,
						responsive: {
						0: { items: 1 },
						320: { items: ((items - 2) > 1) ? (items - 2) : 1 },
						541: { items: ((items - 1) > 1) ? (items - 1) : 1 },
						1200: { items: items }
					}
				};
				if (direc == 'rtl') sliderOptions['rtl'] = true;
				$(this).owlCarousel(sliderOptions);
			}
		});
	}
		$('#carousel0').swiper({
			mode: 'horizontal',
			slidesPerView: 6,
			paginationClickable: false,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			loop: true,
			autoplay: 4000,
			autoplayDisableOnInteraction: true,
			breakpoints: {
				1199: {
					slidesPerView: 5,
					spaceBetween: 0
				},
				991: {
					slidesPerView: 4,
					spaceBetween: 0
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 0
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				300: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});


	function subscribe_popup(){
		$.ajax({
				type: 'post',
				url: 'index.php?route=extension/module/mahardhi_newsletter/subscribepopup',
				dataType: 'html',
				data:$("#frmnewsletterpopup").serialize(),
				success: function (html) {				
					try {
						eval(html);
					} 
					catch (e) {
					}
				}}); 
	}

	// check for validation
	$(document).ready(function() {
		$('#newsletter_usr_popup_email').keypress(function(e) {
			if(e.which == 13) {
				e.preventDefault();
				subscribe_popup();
			}	
		});
	
		//transition effect
			if($.cookie("showpopup") != 1){
				$('#newsletter-popup').modal('show');
			}
			$('#popup_dont_show_again').on('change', function(){			
				if($.cookie("showpopup") != 1){   
					$.cookie("showpopup",'1')
				}else{
					$.cookie("showpopup",'0')
				}
			}); 
	});	

	