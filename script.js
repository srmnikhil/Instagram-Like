var like = document.querySelector("#container");
var heart = document.querySelector("i");

like.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50%, -50%) scale(0)"
    heart.style.opacity = "1"
    setTimeout(function() {
        heart.style.transform = "translate(-50%, -50%) scale(1)";
    }, 0);
    setTimeout(function(){
        heart.style.opacity = "0"
    }, 1000)
})