window.onload = main;
var musics = ["musics/1.mp3", "musics/2.mp3", "musics/3.mp3", "musics/4.mp3"]
var i = 0;
function main() {
    document.getElementById("m1").style.backgroundColor = "#fbc2eb"
}

function back() {

}

function next() {
    document.getElementById("m1").style.backgroundColor = "";
    i++;
    if (i > musics.length - 1) {
        i = 0;
    }
    document.getElementById("Mus1").src = musics[i]
    if (i == 0) {
        document.getElementById("m4").style.backgroundColor = ""
        document.getElementById("m1").style.backgroundColor = "#fbc2eb";
    }
    if (i == 1) {
        document.getElementById("m2").style.backgroundColor = "#fbc2eb";
    }
    if (i == 2) {
        document.getElementById("m2").style.backgroundColor = ""
        document.getElementById("m3").style.backgroundColor = "#fbc2eb";
    }
    if (i == 3) {
        document.getElementById("m3").style.backgroundColor = ""
        document.getElementById("m4").style.backgroundColor = "#fbc2eb";
    }

}
function back() {
    document.getElementById("m1").style.backgroundColor = "";
    i--;
    if (i < 0) {
        i = musics.length - 1
    }
    document.getElementById("Mus1").src = musics[i]
    if (i == 3) {
        document.getElementById("m1").style.backgroundColor = ""
        document.getElementById("m4").style.backgroundColor = "#a6c1ee";
    }
    if (i == 2) {
        document.getElementById("m4").style.backgroundColor = ""
        document.getElementById("m3").style.backgroundColor = "#a6c1ee";
    }
    if (i == 1) {
        document.getElementById("m3").style.backgroundColor = ""
        document.getElementById("m2").style.backgroundColor = "#a6c1ee";
    }
    if (i == 0) {
        document.getElementById("m2").style.backgroundColor = ""
        document.getElementById("m1").style.backgroundColor = "#a6c1ee";
    }
}