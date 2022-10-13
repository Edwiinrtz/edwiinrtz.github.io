
function burger(isOpened) {
    var menu = document.getElementById("burger-menu");
    var x = document.getElementById("close-burger")
    if(isOpened=='True'){
        menu.style.display = "none"
        x.style.display = "none"
        document.getElementById("open-burger").style.display = "inline-block"
    }else{
        menu.style.display = "inline-block";
        x.style.display = "inline-block";

        document.getElementById("open-burger").style.display = "none"
    }
}