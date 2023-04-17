/*La letra "e" es convertida para "enter"  paices /paicenters
La letra "i" es convertida para "imes"     paicenters /paimescenters
La letra "a" es convertida para "ai"        paimescenters / paiimescenters
La letra "o" es convertida para "ober"      paiimescenters / paiimescenters
La letra "u" es convertida para "ufat"      paiimescenters / "paiimescenters"
                                            paices / paiimescenters
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"*/

var botonCodificar = document.querySelector(".encriptar");
var botonDecodificar = document.querySelector(".desencriptar");
var btnCopiar = document.querySelector(".btn-copiar");
var inputValue;
var mostrarValor;
var txtCodificado;
var txtDecodificado;

function capturar() {
    inputValue = document.getElementById("ing").value;
    alert(inputValue);
    console.log(contar());
}




function codificar() {


    inputValue = document.getElementById("ing").value;
    inputValue = inputValue.toLowerCase();
    console.log(inputValue)
    console.log(inputValue.length);

    if (inputValue.length > 0) {

        txtCodificado = inputValue.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

        console.log(txtCodificado)

        var ocultarImg = document.querySelector(".munieco").style.display = "none";
        var ocultarMsj = document.querySelector(".frame5").style.display = "none";
        var mostrarTxtArea = document.querySelector(".text-area-decodificar").value = txtCodificado;
        var mostrarTxtArea = document.querySelector(".text-area-decodificar").style.display = "inline-block";
        var btnCopiar = document.querySelector(".btn-copiar").style.display = "inline-block";
        inputValue = document.getElementById("ing").value = "";
        inputValue = document.getElementById("ing").style.placeholder = "Ingrese el texto aquí";
        inputValue = document.querySelector(".advertencia").style.display = "none";
    } else {
        inputValue = document.querySelector(".advertencia").style.display = "inline-block";
    }

}

function decodificar() {

    inputValue = document.getElementById("ing").value;
    inputValue = inputValue.toLowerCase();
    console.log(inputValue)
    console.log(inputValue.length);

    if (inputValue.length > 0) {

        txtDecodificado = inputValue.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

        console.log(txtDecodificado);

        var ocultarImg = document.querySelector(".munieco").style.display = "none";
        var ocultarMsj = document.querySelector(".frame5").style.display = "none";
        var mostrarTxtArea = document.querySelector(".text-area-decodificar").value = txtDecodificado;
        var mostrarTxtArea = document.querySelector(".text-area-decodificar").style.display = "inline-block";
        inputValue = document.getElementById("ing").value = "";
        inputValue = document.getElementById("ing").style.placeholder = "Ingrese el texto aquí";
        inputValue = document.querySelector(".advertencia").style.display = "none";
    } else {
        inputValue = document.querySelector(".advertencia").style.display = "inline-block";
    }
}

function verificador(event) {
    var charCode = event.keyCode || event.which;
    var charStr = String.fromCharCode(charCode);
    var regex = /^[a-z0-9]+$/;
    if (!regex.test(charStr)) {
        event.preventDefault();
        return false;
    }
    return true;
}


function copiar() {

    var txtCopiado = document.querySelector(".text-area-decodificar").value; //Guardo lo que contiene el txtArea en la variable txtCopiado  
    navigator.clipboard.writeText(txtCopiado); //Copio el contenido seleccionado
}

botonCodificar.addEventListener("click", codificar);
botonDecodificar.addEventListener("click", decodificar);
btnCopiar.addEventListener("click", copiar)




