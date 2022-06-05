const phrases = document.getElementById("phrases");
var texto = document.getElementById("texto");
const btnClean = document.getElementById("btn__clean");
const btnCopyText = document.getElementById("btnCopyText");
const btnMain = document.getElementById("js-btn-main");

const iconCheck = document.getElementsByClassName("fa-check");
const iconCopy = document.getElementsByClassName("fa-copy");

function copyText() {
  texto.select();
  document.execCommand("copy");
  phrases.innerText = "Texto copiado: " + texto.value;
  btnCopyText.innerText = "Texto copiado";
  btnMain.style.background = "#1dd1a1";
  iconCheck[0].style.display = "inline-block";
  iconCopy[0].style.display = "none";
}

function cleanText() {
  texto.value = "";
  phrases.innerHTML = "";
  result.innerHTML = "";
  result.classList.remove("backResult");
  btnClean.style.display = "none";
  btnCopyText.innerText = "Copiar texto";
  btnMain.style.background = "#e84393";
  iconCheck[0].style.display = "none";
  iconCopy[0].style.display = "inline-block";
}

function clean() {
  cleanText();
}

const inputHandler = function (e) {
  result.innerHTML = e.target.value;
  result.classList.add("backResult");
  btnClean.style.display = "inline-block";
  if (texto.value == "") {
    cleanText();
  }
};

texto.addEventListener("input", inputHandler);
