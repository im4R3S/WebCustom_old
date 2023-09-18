document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader-wrapper").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1500);
});

var mybutton = document.getElementById("upBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function upFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}