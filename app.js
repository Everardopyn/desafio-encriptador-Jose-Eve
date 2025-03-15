const textoArea = document.querySelector(".mensaje-cuadrodetexto");//almacena lo que el usuario escribe
const mensaje = document.querySelector(".texto-respuesta");

/*    La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encriptar(){
    document.getElementById("ocultarElementos").style.display = 'none';

    document.getElementById('respuesta').style.display = 'flex';
    document.getElementById("botonCopiar").style.display = "block";

    const textoEncriptado = encriptacion(textoArea.value);
    mensaje.value = textoEncriptado;
    textoArea.value = '';//limpia el campo para que no lo tengas que borrar manualmente
}

function encriptacion(stringEncriptada){


let matrizCodigo = [["e", "entre"], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];//se crea un conjunto de arreglos o arreglo de arreglos
stringEncriptada = stringEncriptada.toLowerCase();

  for (let indice = 0; indice < matrizCodigo.length; indice++) {
    if(stringEncriptada.includes(matrizCodigo[indice][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[indice][0],matrizCodigo[indice][1]);
    }
}
return stringEncriptada;
}

function Desencriptar(){

  const textoEncriptado = desencriptacion(textoArea.value);
  mensaje.value = textoEncriptado;
  textoArea.value = '';
}

function desencriptacion(stringDEsencriptada){


let matrizCodigo = [["e", "entre"], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];//se crea un conjunto de arreglos o arreglo de arreglos
stringDEsencriptada = stringDEsencriptada.toLowerCase();

for (let indice = 0; indice < matrizCodigo.length; indice++) {
  if(stringDEsencriptada.includes(matrizCodigo[indice][1])){
    stringDEsencriptada = stringDEsencriptada.replaceAll(matrizCodigo[indice][1],matrizCodigo[indice][0]);
  }
}
return stringDEsencriptada;
}


/*ambas formas son validas para ocultar los elementos

function ocultar_imagen(){
    document.getElementById("ocultarElementos").style.display = 'none';
}

function ocultar_texto(){
    document.getElementById("textoCuadro").style.visibility = "hidden";
} */