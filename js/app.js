$(document).ready(function(){
	$.scrollUp();
			
	// "isotope" plugin
	var filter = '*', isotope_run = function(f) {
		
		var list = $('.portfolio .list').isotope({
			masonry: {
			  columnWidth: 20
			}, filter: f
		});	
	};
	
	isotope_run(filter);	

	$(".slidingDiv").hide();
	$(".show_hide").show();

	$('.show_hide').click(function(){
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingDiv").slideToggle();
	});

	$(".slidingGaleria2").hide();
	$(".galeria2_show_hide").show();

	$('.galeria2_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria2").slideToggle();
	});

	$(".slidingGaleria3").hide();
	$(".galeria3_show_hide").show();

	$('.galeria3_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria3").slideToggle();
	});

	$(".slidingGaleria4").hide();
	$(".galeria4_show_hide").show();

	$('.galeria4_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria4").slideToggle();
	});

	$(".slidingGaleria5").hide();
	$(".galeria5_show_hide").show();

	$('.galeria5_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria5").slideToggle();
	});

	$(".slidingGaleria6").hide();
	$(".galeria6_show_hide").show();

	$('.galeria6_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria6").slideToggle();
	});

	$(".slidingGaleria7").hide();
	$(".galeria7_show_hide").show();

	$('.galeria7_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria7").slideToggle();
	});

	$(".slidingGaleria8").hide();
	$(".galeria8_show_hide").show();

	$('.galeria8_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria9").hide();
		$(".slidingGaleria8").slideToggle();
	});

	$(".slidingGaleria9").hide();
	$(".galeria9_show_hide").show();

	$('.galeria9_show_hide').click(function(){
		$(".slidingDiv").hide();
		$(".slidingGaleria2").hide();
		$(".slidingGaleria3").hide();
		$(".slidingGaleria4").hide();
		$(".slidingGaleria5").hide();
		$(".slidingGaleria6").hide();
		$(".slidingGaleria7").hide();
		$(".slidingGaleria8").hide();
		$(".slidingGaleria9").slideToggle();
	});

	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});		

});	