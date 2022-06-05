const phrases = document.getElementById("phrases");
var texto = document.getElementById("texto");
const btnClean = document.getElementById("btn__clean");

function copyText(){
    texto.select();
    document.execCommand("copy")
    phrases.innerText = 'Texto copiado: ' + texto.value;
}

function cleanText(){
    texto.value = '';
    phrases.innerHTML = '';
    result.innerHTML = '';
    result.classList.remove("backResult");
  btnClean.style.display = "none";
}

function clean(){
    cleanText();
}

const inputHandler = function(e) {
  result.innerHTML = e.target.value;
  result.classList.add("backResult");
  btnClean.style.display = "inline-block";
  if(texto.value == ''){
    cleanText();
  }
}

texto.addEventListener('input', inputHandler);