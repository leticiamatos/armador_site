$(function() {

	// home
	$('.slideshow').bxSlider({
	  nextSelector: '#bt_next_wpr',
	  prevSelector: '#bt_prev_wpr',
	  auto: true,
	  pager: false,
	  mode: 'fade',
	  pause: 8000
	});

	// View Livro
	$( "#accordion" ).accordion();
	console.log("oi");
})