
function encriptar(){
    document.getElementById("ocultarElementos").style.display = 'none';

    document.getElementById('textoEncriptado').style.display = 'flex';
    document.getElementById("botonCopiar").style.display = "block";

    const alumnos = document.querySelector("mensaje-cuadrodetexto");

    for (let indice = 0; indice < alumnos; indice++) {
      const nuevoTelefono = alumnos[indice].textContent.replace("a","ai");
      alumnos[indice].textContent = nuevoTelefono;
      console.log(nuevoTelefono);

      var text = document.getElementById("texto").value;
        var newText = text.replace("a", "ai");
        document.getElementById("texto").value = newText;
        console.log(newText);
  }
}

/*ambas formas son validas para ocultar los elementos

function ocultar_imagen(){
    document.getElementById("ocultarElementos").style.display = 'none';
}

function ocultar_texto(){
    document.getElementById("textoCuadro").style.visibility = "hidden";
} */