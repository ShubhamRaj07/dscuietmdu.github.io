//Mouse Move Effect for the background
$(document).ready(function()
	{
		console.log("Dom is ready");
		var black = $('.welcome__shape-black');
var orange = $('.welcome__shape-orange');
var blue = $('.welcome__shape-blue');

var welcome__block = $('.welcome__block');

$(".welcome").on("mousemove",function(e){
	console.log("mousemove");
	var valueX = (e.pageX * -1 / 12);
	var valueY = (e.pageY * -1 / 12);

	black.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	});
	orange.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	});
	blue.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	})
})
})
