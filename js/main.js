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
    <img class="portfolio_img" src="img/1.png" alt="foto works 1">
    <h3>Isometric Perspective Mock-Up</h3>                    
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/2.png" alt="foto works 2">
    <h3>Time Zone App UI</h3>
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/3.png" alt="foto works 3">
    <h3>Viro Media Players UI</h3>
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/4.png" alt="foto works 4">
    <h3>Blog / Magazine Flat UI Kit</h3>
</div>
`;

let moreProjects = `
<div class="pf_block__item">
    <img class="portfolio_img" src="img/1.png" alt="foto works 1">
    <h3>Isometric Perspective Mock-Up</h3>                    
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/2.png" alt="foto works 2">
    <h3>Time Zone App UI</h3>
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/3.png" alt="foto works 3">
    <h3>Viro Media Players UI</h3>
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/4.png" alt="foto works 4">
    <h3>Blog / Magazine Flat UI Kit</h3>
</div>
<div class="pf_block__item">
    <a href="https://vk.com/" target="_blank" ><img class="portfolio_img" src="img/5.png" alt="foto works 4"></a>
    <h3><a href="https://vk.com/" target="_blank">VK</a></h3>
</div>
<div class="pf_block__item">
    <a href="https://telegram.org/" target="_blank"><img class="portfolio_img" src="img/6.png" alt="foto works 4"></a>
    <h3><a href="https://telegram.org/" target="_blank">Telegram</a></h3>
</div>
`;

let webProjects = `
<div class="pf_block__item">
    <a href="https://vk.com/" target="_blank"><img class="portfolio_img" src="img/5.png" alt="foto works 4"></a>
    <h3><a href="https://vk.com/" target="_blank">VK</a></h3>
</div>
<div class="pf_block__item">
    <a href="https://telegram.org/" target="_blank"><img class="portfolio_img" src="img/6.png" alt="foto works 4"></a>
    <h3><a href="https://telegram.org/" target="_blank">Telegram</a></h3>
</div>
`;

let appsProjects = `
<div class="pf_block__item">
    <img class="portfolio_img" src="img/1.png" alt="foto works 1">
    <h3>Isometric Perspective Mock-Up</h3>                    
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/2.png" alt="foto works 2">
    <h3>Time Zone App UI</h3>
</div>
`;

let iconsProjects = `
<div class="pf_block__item">
    <img class="portfolio_img" src="img/3.png" alt="foto works 3">
    <h3>Viro Media Players UI</h3>
</div>
<div class="pf_block__item">
    <img class="portfolio_img" src="img/4.png" alt="foto works 4">
    <h3>Blog / Magazine Flat UI Kit</h3>
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