// Wyoming Telford
//drill2

$(function(){
	var square = $(".shape");
	var board = $(".wrapper .stage");

	$(document).on("keyup", function(e) {
		switch(e.which){
			case 37:
			if(square.position().left >0){
				square.animate({left: '-=10'});
			}
			break;
			case 38: 
			if(square.position().top >0){
				square.animate({top: '-=10'});
			}
			break;
			case 39:
			if(square.position().left <800){
				square.animate({left: '+=10'});
			}			
			break;
			case 40:
			if(square.position().top <500){
				square.animate({top: '+=10'});
			}
			break;
			case 83:
			square.effect("shake", {times: 5}, 400);
			break;
		}
	})    
});

 		// left = 37,
   //      up = 38,
   //      right = 39,
   //      down = 40;



