//var btnEnviar = document.getElementById("enviar");

function validacion(){
    var textNomb = document.getElementById("campo_nombre").value;
    var textLib = document.getElementById("campo_libros").value;

    let campoNombre = document.getElementById("campo_nombre");
    let campoLibros = document.getElementById("campo_libros");
    let divLibros = document.getElementById("div_libros");
    let campoCantidadLibros = document.getElementById("campo_cantidad");
    let campoTel= document.getElementById("campo_telefono");
    let campoEmail= document.getElementById("campo_email");

    validarCampoNombre(campoNombre);
    validarCampoTel(campoTel);
    validarCampoEmail(campoEmail);
    let pErrorLibros = validarCampoLibros(campoLibros, divLibros);
    validarCampoCantidadLibros(campoCantidadLibros, pErrorLibros);

    return textNomb !== '';
}

function validarCampoNombre(pCampoNombre) {
    if (pCampoNombre.value === "") {
        let avisoNombre = document.createElement("p");
        avisoNombre.innerHTML = "El campo del Nombre es obligatorio";
        avisoNombre.style.color = "orange";
        pCampoNombre.insertAdjacentElement("afterend", avisoNombre);
    }
}

function validarCampoLibros(pCampoLibros, pDivLibros) {
    if (pCampoLibros.value === "") {
        let avisoLibros = document.createElement("p");
        avisoLibros.innerHTML = "- El campo del Libro es obligatorio";
        avisoLibros.style.color = "orange";
        pDivLibros.insertAdjacentElement("afterend", avisoLibros);
        return avisoLibros;
    }
    return null;
}

function validarCampoCantidadLibros(pCampoCantidad, pErrorLibros) {
    if (pCampoCantidad.value < 1 || pCampoCantidad.value > 5) {
        console.log("Cantidad incorrecta");
        let avisoCantidadLibros = document.createElement("p");
        avisoCantidadLibros.innerHTML = "- La cantidad debe ser un número del 1 al 5";
        avisoCantidadLibros.style.color = "orange";
        pErrorLibros.insertAdjacentElement("afterend", avisoCantidadLibros);
    }
}

function validarCampoTel(pCampoTel){
  var formato=/^(\d{3}[- ]{1}){2}\d{3}$/;
  //d= 0-9-ko zenbakia
    if (!formato.test(pCampoTel.value)){
        let avisoTel = document.createElement("p");
        avisoTel.innerHTML = "El campo del telefono debe contener el patrón 123(-)456(-)789";
        avisoTel.style.color = "orange";
        pCampoTel.insertAdjacentElement("afterend", avisoTel);
    }
}

function validarCampoEmail(pCampoEmail){
    var formato= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //w=a-z,A-Z eta 0-9     +=1 edo 1>  ?=0/1 *=0 edo 0>
      if (!formato.test(pCampoEmail.value)){
          let avisoEmail = document.createElement("p");
          avisoEmail.innerHTML = "El campo del email es incorrecto. Debe tener el siguiente formato:hola@gmail.com";
          avisoEmail.style.color = "orange";
          pCampoEmail.insertAdjacentElement("afterend", avisoEmail);
      }
  }