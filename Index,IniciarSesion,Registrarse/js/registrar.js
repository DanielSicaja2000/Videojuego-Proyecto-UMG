const form = document.getElementById('registrar');
const nombreUsuarioInput = document.getElementById('nombre-usuario');
const correoInput = document.getElementById('correo');
const contraseñaInput = document.getElementById('contraseña');
const repetirContraseñaInput = document.getElementById('repetir-contraseña');
const errorContainer = document.getElementById('error-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nombreUsuarioInput.value.length < 3) {
    showError('El nombre de usuario debe tener al menos 3 caracteres.');
    return;
  }


  if (!correoInput.validity.valid) {
    showError('Por favor ingrese un correo electrónico válido.');
    return;
  }


  if (contraseñaInput.value.length < 5) {
    showError('La contraseña debe tener al menos 5 caracteres.');
    return;
  }


  if (contraseñaInput.value !== repetirContraseñaInput.value) {
    showError('Las contraseñas no coinciden.');
    return;
  }

  form.submit();
});

function showError(message) {
  
  errorContainer.innerHTML = `<div class="error">${message}</div>`;
}