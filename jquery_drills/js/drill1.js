// Wyoming Telford
//drill1

$(function(){
	var ball = $('.wrapper .stage .ball');
	ball.on("click", function() {
		ball.fadeOut(1000, function(){
			ball.appendTo('div .stage').animate({
				'left': (Math.random() * 700),
				'top': (Math.random() * 500),

			}).fadeIn(1000);

		})
	})    
});