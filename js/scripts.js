/*SCRIPTS HERE*/

/*Menu*/
var menu = document.getElementById("menu-principal");
menu.onchange = function(){ document.getElementsByTagName('body')[0].style.overflow=this.checked?'hidden':'auto'; }

/*Destaques*/
var openL = document.querySelectorAll(".open-lightbox");
var i;
for (i = 0; i < openL.length; i++) {
    openL[i].addEventListener("click", function(){
        this.parentNode.querySelector('.lightbox').classList.add('active');
        document.getElementsByTagName('body')[0].style.overflow='hidden';
    });
}
var closeL = document.querySelectorAll(".close-lightbox");
for (i = 0; i < closeL.length; i++) {
    closeL[i].addEventListener("click", function(){
        this.parentNode.classList.remove('active');
        document.getElementsByTagName('body')[0].style.overflow='auto';
    });
}