var btni = document.getElementsByClassName("btni");
var slide = document.getElementById("slide");

btni[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
}

btni[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
}

btni[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
}
