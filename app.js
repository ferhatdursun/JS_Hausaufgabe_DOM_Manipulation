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
    ses.volume = 0.1;
}

function pauseAudio() {
    x.pause();
}


const check = document.querySelector(".checkbox");

const text = document.querySelector(".textbox");

text.onkeyup = () => {
    if (check.checked) {
        text.value = text.value.toUpperCase()

    } else {
        text.value = text.value.toLowerCase();

    }
}

//*ekle butonuna basıldığında inputa girilen değerler benim ul listeme eklensin

document.querySelector(".ekle").onclick = () => {
    const liste = document.querySelector(".liste");
    const language = document.querySelector(".language");

    liste.innerHTML = liste.innerHTML + `<li>${language.value} </li>`;

    //*input girişi yapılıp eleman üstte listeye eklendikten sonra input temizlensin
    language.value = "";

    //*UZUN YOL
    // yeni girilen satiri saklamak icin bir li olusturduk.
    // const yeniLi = document.createElement("li");
    // yeni li icin textnode olusturduk
    // const textNode = document.createTextNode(satir.value);
    //olusturdugumuz texnode'u yeni li'ye bagladik.
    // yeniLi.appendChild(textNode);
    // yeni eklenen satiri var olan listeye (ul) baglayalim.
    // liste.appendChild(yeniLi);
}

//*sil butonu tıklandığında

document.querySelector(".sil").onclick = () => {
    const liste = document.querySelector(".liste");

    liste.removeChild(liste.lastElementChild);//*listenin son elemanını sil
    // liste.removeChild(liste.firstElementChild);//*listenin ilk elemanını sil

}



//! 
document.querySelector(".language").onkeydown = (tuslar) => {
    console.log(tuslar);

    //*eğer enter=13 tuşuna basıldıysa
    if (tuslar.keyCode === 13) {
        document.querySelector(".ekle").click();
    }

    //*eğer delete =46 tuşuna basılırsa sil butonu tetiklensin
    if (tuslar.keyCode === 8) {
        document.querySelector(".sil").click();
    }
}


//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const liste = document.querySelector(".liste"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// inputDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.

//!kısa yol

liste.innerHTML = `<h1> ${"Programlama Dilleri"}</h1>` + liste.innerHTML;


