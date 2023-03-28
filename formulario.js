function validacion(){
    let campoNombre = document.getElementById("campo_nombre");
    let campoTel = document.getElementById("campo_telefono");
    let campoEmail = document.getElementById("campo_email");
    let campoLibros = document.getElementById("campo_libros");
    let divLibros = document.getElementById("div_libros");
    let campoCantidadLibros = document.getElementById("campo_cantidad");

    let nombreValido = validarCampoNombre(campoNombre);
    let telValido = validarCampoTel(campoTel);
    let emailValido = validarCampoEmail(campoEmail);
    let librosValidos = validarCampoLibros(campoLibros, divLibros);
    let cantidadLibrosValido = validarCampoCantidadLibros(campoCantidadLibros, librosValidos, divLibros);

    if (nombreValido && telValido && emailValido && librosValidos && cantidadLibrosValido) {
        console.log("Se ha enviado con éxito");
        return true;
    } else {
        return false;
    }
}

function validarCampoNombre(pCampoNombre) {
    let avisoNombre = document.getElementById("aviso_nombre");
    if (pCampoNombre.value === "") {
        if (!avisoNombre) {
            avisoNombre = document.createElement("p");
            avisoNombre.id = "aviso_nombre";
            avisoNombre.innerHTML = "El campo del Nombre es obligatorio";
            avisoNombre.style.color = "orange";
            pCampoNombre.insertAdjacentElement("afterend", avisoNombre);
        }
        return false;
    } else {
        if (avisoNombre) {
            avisoNombre.remove();
        }
        return true;
    }
}

function validarCampoTel(pCampoTel) {
    let formato = /^(\d{3}[- ]{1}){2}\d{3}$/;
    let avisoTel = document.getElementById("aviso_tel");
    if (!formato.test(pCampoTel.value)) {
        if (!avisoTel) {
            let avisoTel = document.createElement("p");
            avisoTel.id = "aviso_tel";
            avisoTel.innerHTML = "El campo del telefono debe contener el patrón 123(-)456(-)789";
            avisoTel.style.color = "orange";
            pCampoTel.insertAdjacentElement("afterend", avisoTel);
        }
        return false;
    } else {
        if (avisoTel) {
            avisoTel.remove();
        }
        return true;
    }
}

function validarCampoEmail(pCampoEmail){
    var formato= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let avisoEmail = document.getElementById("aviso_email");
    if (!formato.test(pCampoEmail.value)) {
        if (!avisoEmail) {
            let avisoEmail = document.createElement("p");
            avisoEmail.id = "aviso_email";
            avisoEmail.innerHTML = "El campo del email es incorrecto. Debe tener el siguiente formato: hola@gmail.com";
            avisoEmail.style.color = "orange";
            pCampoEmail.insertAdjacentElement("afterend", avisoEmail);
        }
        return false;
    } else {
        if (avisoEmail) {
            avisoEmail.remove();
        }
        return true;
    }
}

function validarCampoLibros(pCampoLibros, pDivLibros) {
    let avisoLibros = document.getElementById("aviso_libros");
    if (pCampoLibros.value === "") {
        if (!avisoLibros) {
            let avisoLibros = document.createElement("p");
            avisoLibros.id = "aviso_libros";
            avisoLibros.innerHTML = "- El campo del Libro es obligatorio";
            avisoLibros.style.color = "orange";
            pDivLibros.insertAdjacentElement("afterend", avisoLibros);
        }
        return false;
    } else {
        if (avisoLibros) {
            avisoLibros.remove();
        }
        return true;
    }
}

function validarCampoCantidadLibros(pCampoCantidad, pLibrosValidos, pDivLibros) {
    let avisoCantidadLibros = document.getElementById("aviso_cantidad_libros");
    if (pCampoCantidad.value < 1 || pCampoCantidad.value > 5) {
        if (!avisoCantidadLibros) {
            let avisoCantidadLibros = document.createElement("p");
            avisoCantidadLibros.id = "aviso_cantidad_libros";
            avisoCantidadLibros.innerHTML = "- La cantidad debe ser un número del 1 al 5";
            avisoCantidadLibros.style.color = "orange";
            if (!pLibrosValidos) {
                let avisoLibros = document.getElementById("aviso_libros");
                avisoLibros.insertAdjacentElement("afterend", avisoCantidadLibros);
            } else {
                pDivLibros.insertAdjacentElement("afterend", avisoCantidadLibros);
            }
        }
        return false;
    } else {
        if (avisoCantidadLibros) {
            avisoCantidadLibros.remove();
        }
        return true;
    }
}