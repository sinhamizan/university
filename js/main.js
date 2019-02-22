$(document).ready(function(){

	//wow-js-active
	new WOW().init();
	
	// menu-fixed
	$(window).scroll(function(){

		var top = $(window).scrollTop();
		if (top > 120) {
			$('.header-btm').addClass('header-bg');
		}
		else{
			if ($('.header-btm').hasClass('header-bg')){
				$('.header-btm').removeClass('header-bg');
			}
		} 
	});

	//go to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 100)
		{
			$('#gotopbtn').fadeIn();
		}
		else{
			$('#gotopbtn').fadeOut();
		}
	});
	$('#gotopbtn').click(function(){

		$('html ,body').animate({scrollTop : 0},800);

	});
	
	// slicnav js
	$('#menu').slicknav({
		prependTo: ".header-btm",
		label: "",
	});

	// main-slider
		$('.main-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    autoplayHoverPause: true,
	    autoplay:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	// popular-courses-slider
		$('.course-active').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots:false,
	    autoplayHoverPause: true,
	    autoplay:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	// popular-courses-slider
		$('.adviser-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots:false,
	    autoplayHoverPause: true,
	    autoplay:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})
	
	// popular-courses-slider
		$('.review-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots:false,
	    autoplayHoverPause: true,
	    autoplay:true,
	    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	})

	//
	$('.search-icon').click(function(){
		$('.search').toggle(500);
	});



})