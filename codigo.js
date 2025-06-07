function validar(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;


    if(usuario == "Marlu" && clave=="123"){
        window.location.href = "principal.html";

    }else{
        alert("ingrese clave correcta");
    }
}

function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;


    if (nombre && apellido && dni && telefono) {
        alert("¡Gracias por enviar tu solicitud de adopción, " + nombre + " " + apellido + "!, en seguida nos contactaremos con usted. ");
    } else {
        alert("Por favor, completá todos los campos.");
    }

    
}
