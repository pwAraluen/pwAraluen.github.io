$(document).ready(function(){ 

	/****************************************************************************************
	********************************** Window Controller ************************************
	****************************************************************************************/
	
	$('[data-open-popup]').click(function(event){
		event.preventDefault();
		var wnd_name = $(this).attr('data-open-popup');
		$('[data-name-popup]').removeClass("active");
		$('[data-name-popup=' + wnd_name + ']').addClass("active");
	});
	
	$('.popup__cancel, .popup-cancel').click(function(event){
		$('[data-name-popup]').removeClass("active");
	});

	$(document).mousedown(function (e){
		if (!$(".popup__box").is(e.target) && $(".popup__box").has(e.target).length === 0) {
			$('[data-name-popup]').removeClass("active");
		}
	});

	/****************************************************************************************
	********************************* Paralax Controller ************************************
	****************************************************************************************/
	
	$(window).scroll(function() {
		if($(window).outerWidth() > 1024){
			$('.paralax').css('transform', 'translateY(' + ($(this).scrollTop() * 1.5 * -1) + 'px)');
		}
		else{
			$('.leaf_bg').removeAttr('style');
		}
	});
	
	if($(window).outerWidth() > 1024){
		$('.paralax').css('transform', 'translateY(' + ($(this).scrollTop() * 1.5 * -1) + 'px)');
	}
	else{
		$('.leaf_bg').removeAttr('style');
	}
	
	/****************************************************************************************
	********************************* Slider Controller *************************************
	****************************************************************************************/
	
	$("#main-slider").MVisionSlider({
		animationSlide: 'horizontal',
		autoSlide: true,
		showTime: 6000,
		actionShowTime: 8000,
		animationTimeSlide: 800,
		showMarkers: true,
		iconMarker: '',
		showArrows: true,
		iconPrevArrow: '<img src="images/slider/prev.png" alt="prev">',
		iconNextArrow: '<img src="images/slider/next.png" alt="next">',
		combineNav: true,
	});
	
	/****************************************************************************************
	************************************* Scroll Top ****************************************
	****************************************************************************************/
	
	$('.footer__buttons-up').click(function(event){
		$('html, body').animate({ 
			scrollTop: 0
		}, 500);
	});
	
	/****************************************************************************************
	*********************************** Custom Select ***************************************
	****************************************************************************************/
	
	$('.custom-select-question').nSelect({ theme: 'myStyleSelect' });

	/****************************************************************************************
	******************************** apple guide drop box ***********************************
	****************************************************************************************/
	
	$(".macguide__title").click(function(){
		$(this).parent().find(".macguide__content").slideToggle();
		$(this).find(".macguide__content").removeAttr('style');
	});
	
	$(".macguide__content-open-screenshot").click(function(){
		var screen_id = $(this).attr('data-drop-box');
		$(".macguide__content-screenshot[data-drop-box-name = " + screen_id + "]").slideToggle();
	});
	
	/****************************************************************************************
	************************************* Top players ***************************************
	****************************************************************************************/
	
	$('.widget-top').MVisionToggleClass({
		classButton: 'widget-top__switch-button',
		toggleClassButton: 'active',
		dataButtonAttr: 'data-open-tab',
		classBox: 'widget-top__box',
		toggleClassBox: 'active',
		dataBoxAttr: 'data-name-tab',
		defaultElement: true,
		defaultIndexElement: 0,
		ancoreLinks: false,
	});

});


	$('.promo__play').click(function(event){
		event.preventDefault();
		let video_player = '<iframe width="100%" height="100%" src="'+$('.video-bg__box').attr('data-youtube-url')+'?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$(".video-bg__box").append(video_player);
		$('.video-bg').addClass("active");
		
	});
	
	$('.video-bg__cancel').click(function(event){
		if($('.video-bg').hasClass('active')){
			$('.video-bg').removeClass("active");
		
			setTimeout(function(){
				$(".video-bg__box").html("");
			}, 300);
		}
	});

