const resim2 = document.querySelector(".resim");

resim2.onmouseover = () => {
    resim2.src = "./img/img2.jpg"
    resim2.src = "./img/aslan1.jpeg"
    //* Burada ilk telefon resminin(img2.jpg) üzerine over yapildiginda aslan1.jpeg resmi geliyor.
}

resim2.onmouseout = () => {

    //*! Nachdem man über erstes Foto mit dem maus gekommen ist, wird zweites Foto mit drittes automatisch geändert.
    resim2.src = "./img/aslan1.jpeg"
    resim2.src = "./img/aslan2.jpeg"
}


const baglat = document.querySelector(".btn_2")
const konus = document.querySelector(".btn_3")

baglat.onclick = () => {
    //* Wenn man .btn_2 button drückt, wäre resim2 mit telbagla.gift
    resim2.src = "./img/telbagla.gif"

}

konus.onclick = () => {
    //* Wenn man .btn_3 button drückt, wäre resim2 mit telefon.gift
    resim2.src = "./img/telefon.gif"

}


var x = document.getElementById("ses");
//* Ich habe in der HTML Seite "playAudio" (beim jedes Button) und ein ID "ses"  identifiziert, um dieses Auido abspilen und abstoppen zu können.

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}






