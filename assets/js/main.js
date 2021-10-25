$(document).ready(function(){

	// MOBILE MENU 
	$('.main-menu-trigger').on('click', function(){
		$('.mobile-menu').addClass('mobile-menu-show');
	})

	$('.mobile-menu-close').on('click', function(){
		$('.mobile-menu').removeClass('mobile-menu-show');
	})



	// SEARCH BOX 
	$('.search-trigger').on('click', function(){
		$('.search-box-popup').show();
	})

	$('.search-form-close').on('click', function(){
		$('.search-box-popup').hide();
	})

	// GLOBAL PERTNERS CAROUSEL
	$('.partner-logo-carousel').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 2,
	  nextArrow: '<i class="bi bi-chevron-right brand-right"></i>',
	  prevArrow: '<i class="bi bi-chevron-left brand-left"></i>',

	});
})


