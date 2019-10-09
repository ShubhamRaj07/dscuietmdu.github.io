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
	var valueX = (e.clientX * 1 / 5);
	var valueY = (e.clientY * 1 / 5);

	black.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	});
})

$(".welcome").on("mousemove",function(e){
	console.log("mousemove");
	var valueX = (e.clientX * 1 / 10);
	var valueY = (e.clientY * 1 / 15);

	orange.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	});
})

$(".welcome").on("mousemove",function(e){
	console.log("mousemove");
	var valueX = (e.clientX * 1 / 15);
	var valueY = (e.clientY * 1 / 15);
     
     blue.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	});
})

$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	if($(this).scrollTop() > 367 && $(this).scrollTop() < 1173)
		{
			console.log("Move circle 1st");
			$(".circle").addClass("goLeft");
		}
	if($(this).scrollTop() > 1005 && $(this).scrollTop() < 1474)
		{
			console.log("Move circle 2nd");
			$(".circle").addClass("goRight");
		}
		if($(this).scrollTop() > 1474)
		{
			console.log("Move circle 1st");
			$(".circle").addClass("goDown");
		}
});

})

$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	var cloud = $('.backCloud');
    if($(this).scrollTop() > 367 && $(this).scrollTop() < 1173)
    {
		cloud.animate({'top' : '5%'}, 0.6);
    }
})

$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	var outback = $('#outback');
    if($(this).scrollTop() > 765 && $(this).scrollTop() < 1714)
    {
		outback.animate({'top' : '5%'}, 1.3);
    }
})

$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	var photo = $('.photo');
    if($(this).scrollTop() > 1474 && $(this).scrollTop() < 1714)
    {
		photo.animate({'left' : '15%'}, 1.3);
    }
})


