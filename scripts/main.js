/**
 * Created by Haziz on 4/23/2016.
 **/
var body = document.getElementById("body");
//sideNav Functions
var bars = document.getElementById("bars");
var nav = document.getElementById("sideNav");
var close = document.getElementById("block");
var navCloseBtn = document.getElementById("menuBtn");
function openNav(){

    nav.style.width = "250px";
    nav.style.overflowX = "hidden";
    nav.style.overflowY = "scroll";
    close.style.marginLeft = "250px";
    close.style.marginRight = "-250px";
    body.style.overflow = "hidden";
    close.style.transition = "1s";
    bars.style.transform = "rotate(90deg)";
    bars.style.transition = "1s";
    setTimeout(
        function(){
            navCloseBtn.setAttribute("onclick", "closeNav()");
            close.setAttribute("onclick", "closeNav()");
        },
        100
    );
}
function closeNav(){
    nav.style.width = "0";
    close.style.marginLeft = "0";
    close.style.marginRight = "0";
    body.style.overflowY = "scroll";
    body.style.overflowX = "hidden";
    bars.style.transform = "rotate(0deg)";
    bars.style.transition = "1s";
    setTimeout(
        function(){
            navCloseBtn.setAttribute("onclick", "openNav()");
            close.removeAttribute("onclick");
        },
        100
    );
}