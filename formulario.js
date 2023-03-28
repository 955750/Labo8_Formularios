//var btnEnviar = document.getElementById("enviar");

function validacion(){
    var textNomb = document.getElementById("campo_nombre").value;
    var textLib = document.getElementById("campo_libros").value;

    let campoNombre = document.getElementById("campo_nombre");
    validarNombreCliente(campoNombre);

    return textNomb !== '';

}

function validarNombreCliente(pCampoNombre) {
    if (pCampoNombre.value === "") {
        console.log("Campo Nombre VACÍO");
        let avisoNombre = document.createElement("p");
        avisoNombre.innerHTML = "El campo del Nombre es obligatorio";
        pCampoNombre.insertAdjacentElement("afterend", avisoNombre);
    }
}