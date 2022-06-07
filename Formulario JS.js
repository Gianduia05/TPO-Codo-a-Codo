document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact").addEventListener('submit', validarFormulario);
  });


function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombres').value;
  if(nombre.length == 0) {
    alert('Debes colocar un nombre');
    return;
  }
  var correo = document.getElementById('correo').value;
  if(correo == "" ) {
    alert('Debes colocar un correo válido');
    return;
  }

  var telefono = document.getElementById('telefono').value;
  if (telefono.length < 8) {
    alert('El telefono no es válido');
    return;
  }

  var mensaje = document.getElementById('mensaje').textContent;
  if (mensaje.length > 5000 ) {
    alert('El mensaje debe ser menor a 5000 caracteres');
    return;
  }


// FUNCIONES //


  this.submit();
}





