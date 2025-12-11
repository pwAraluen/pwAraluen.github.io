$(document).ready(function(){
	/****************************************************************************************
	******************************* Navigation Controller ***********************************
	****************************************************************************************/

	$('.navigation__open-nav').click(function(event){
		
		$(this).toggleClass('active');
		
		if($('.navigation__content').is(':hidden')){
			$('.navigation__content').slideToggle(200, function() { 
				$(this).css('display', 'flex');
			});
		}
	});
	
	$(document).mouseup(function (e){
		if (!$('.navigation__content').is(e.target) && $('.navigation__content').has(e.target).length === 0 && $(".navigation__open-nav").is(":visible")) {
			$('.navigation__content' + ':visible').slideToggle(200, function() { 
				$(".navigation__open-nav").removeClass('active');
				$(this).css('display', 'none');
			});
		}
	});
	
	$(window).resize(function(){
		if(!$(".navigation__open-nav").is(":visible")){
			$(".navigation__content").removeAttr("style");
			$(".navigation__open-nav").removeClass('active');
		}
	});
	
	/****************************************************************************************
	******************************* Languages ***********************************
	****************************************************************************************/
	
	$('.navigation__langs-current').click(function(event){
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
		}
		else{
			$(this).parent().addClass('active');
		}
	});
	
	$(document).mouseup(function (e){
		if (!$('.navigation__langs').is(e.target) && $('.navigation__langs').has(e.target).length === 0){
			$(".navigation__langs").removeClass('active');
		}
	});
});

