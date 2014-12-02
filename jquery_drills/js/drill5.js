$(function(){
//on click of button look at values of who do and you do and store in variables (function)
//establish variable for items to exchange too
//switch on who, make all your cases for the drop downs, set the item that you want to make a change to,
// repeat for what dropdown with what
//you want to do after the color has been changed (change background color with css and fadein/out)
// what calls the funciton on the item you defined in who. 

//create a function for filter by color, use rgb instead of html colors or hex, because it converts
//var filterByColor = function(obj, color){
//     return obj.filter(function(){

//     })
// }



    console.log('The dom is ready! (drill 5)');

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);

});




//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}

