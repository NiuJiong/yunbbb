document.addEventListener("scroll",setPosition);
window.addEventListener("resize",setPosition);
function setPosition(){
    var scroll_Left=document.body.scrollLeft,
        nav=document.getElementById("nav");
    nav.style.left = ~scroll_Left + 1 + "px";
}