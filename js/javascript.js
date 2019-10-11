//Mouse Move Effect for the background
$(document).ready(function()
	{
		console.log("Dom is ready");
		var home_page = $('.home_page');
		var layer = $('#layer');

$("#layer").on("mousemove",function(e){
	console.log("mousemove");
	var valueX = (e.clientX * -1 / 45);
	var valueY = (e.clientY * 0);

	home_page.css({
		'transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)',
		'-webkit-transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)',
		'-ms-transform': 'translate3d('+valueX+'px, '+valueY+'px,0) translate(0px,0px)'
	});
})


$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	if($(this).scrollTop() > 367 && $(this).scrollTop() < 767)
		{
			console.log("Move circle 1st");
			$(".circle").addClass("goLeft");
		}
	if($(this).scrollTop() > 767 && $(this).scrollTop() < 1122)
		{
			console.log("Move circle 2nd");
			$(".circle").addClass("goRight");
		}
		if($(this).scrollTop() > 1122)
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
		cloud.animate({'top' : '-7%'}, 0.6);
    }
})

$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	var outback = $('#outback');
    if($(this).scrollTop() > 1005 && $(this).scrollTop() < 1714)
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


