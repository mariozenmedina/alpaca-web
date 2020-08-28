/*SCRIPTS HERE*/
var go = document.querySelectorAll(".go");
var i;
for (i = 0; i < go.length; i++) {
    go[i].addEventListener("click", function(){
        var goto = this.dataset.go;
        document.getElementById(goto).scrollIntoView({ 
          behavior: 'smooth' 
        });
        document.getElementById("menu-input").checked = false;
    });
}