// бургер меню при эране менее 576px //

let menuTrigger = document.getElementById('menuTrigger');
let menuBurgerItems = document.getElementById('menuBurgerItems');

menuTrigger.onclick = function() {
    $("#menuBurgerItems").slideToggle(200);
}

$("#menuBurgerItems a").click(function(){
    if ( menuBurgerItems.style.display === "block" ) {
        $("#menuBurgerItems").slideUp(400);
    }
} )