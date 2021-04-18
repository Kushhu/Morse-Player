const body = document.getElementById("body");
const short = document.getElementById("short");
const long = document.getElementById("long");
const d1 = document.getElementById("dot");
const d2 = document.getElementById("dot2");
const audio = document.getElementById("a");
const b = document.getElementById("b");

body.addEventListener("keypress", function (e) {
    if (e.keyCode == '32') {
        audio.play();
    }
    if (e.keyCode == '13') {
        b.play();
    }
});
function play1() {
        audio.play();
}
function play2() {
        b.play();
}

