// бургер меню при эране менее 576px 

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

// Интрерактив для блока портфолио 

let allProjects = `
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/1.png" alt="foto works 1"></a>
    <h3><a href="#">Isometric Perspective Mock-Up</a></h3>                    
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/2.png" alt="foto works 2"></a>
    <h3><a href="#">Time Zone App UI</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/3.png" alt="foto works 3"></a>
    <h3><a href="#">Viro Media Players UI</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/4.png" alt="foto works 4"></a>
    <h3><a href="#">Blog / Magazine Flat UI Kit</a></h3>
</div>
`;

let moreProjects = `
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/1.png" alt="foto works 1"></a>
    <h3><a href="#">Isometric Perspective Mock-Up</a></h3>                    
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/2.png" alt="foto works 2"></a>
    <h3><a href="#">Time Zone App UI</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/3.png" alt="foto works 3"></a>
    <h3><a href="#">Viro Media Players UI</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/4.png" alt="foto works 4"></a>
    <h3><a href="#">Blog / Magazine Flat UI Kit</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/5.png" alt="foto works 4"></a>
    <h3><a href="#">VK</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/6.png" alt="foto works 4"></a>
    <h3><a href="#">Telegram</a></h3>
</div>
`;

let webProjects = `
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/5.png" alt="foto works 4"></a>
    <h3><a href="#">VK</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/6.png" alt="foto works 4"></a>
    <h3><a href="#">Telegram</a></h3>
</div>
`;

let appsProjects = `
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/1.png" alt="foto works 1"></a>
    <h3><a href="#">Isometric Perspective Mock-Up</a></h3>                    
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/2.png" alt="foto works 2"></a>
    <h3><a href="#">Time Zone App UI</a></h3>
</div>
`;

let iconsProjects = `
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/3.png" alt="foto works 3"></a>
    <h3><a href="#">Viro Media Players UI</a></h3>
</div>
<div class="pf_block__item">
    <a href="#"><img class="portfolio_img" src="img/4.png" alt="foto works 4"></a>
    <h3><a href="#">Blog / Magazine Flat UI Kit</a></h3>
</div>
`;

$("#moreProjects").click(function(event){
    event.preventDefault();
    $("#blockItems").html(moreProjects);
    $("#moreProjects").css('display', 'none');
})

$("#allProjects").click(function(event){
    event.preventDefault();
    $("#blockItems").html(allProjects);
    $("#moreProjects").css('display', 'block');
})

$("#webProjects").click(function(event){
    event.preventDefault();
    $("#blockItems").html(webProjects);
    $("#moreProjects").css('display', 'none');
})

$("#appsProjects").click(function(event){
    event.preventDefault();
    $("#blockItems").html(appsProjects);
    $("#moreProjects").css('display', 'none');
})

$("#iconsProjects").click(function(event){
    event.preventDefault();
    $("#blockItems").html(iconsProjects);
    $("#moreProjects").css('display', 'none');
})