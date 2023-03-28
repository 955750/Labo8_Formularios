//var btnEnviar = document.getElementById("enviar");

function validacion(){
    var textNomb = document.getElementById("campo_nombre").value;
    var textLib = document.getElementById("campo_libros").value;
    if (textNomb === '' ){
        console.log('error: vacio');
        alert("Error, vacio");
        return false;
    }
    return true;
}