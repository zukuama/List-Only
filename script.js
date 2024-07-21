document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener los valores de los inputs
  let nombre = document.getElementById('nombre').value;
  let linkFoto = document.getElementById('link-foto').value;
  let linkInstagram = document.getElementById('Instagram').value;
  let linkMega = document.getElementById('mega').value;
  let linkCuty = document.getElementById('cuty').value;

  // Construir el objeto con los datos a enviar
  let formData = {
    'nombre': nombre,
    'linkFoto': linkFoto,
    'linkInstagram': linkInstagram,
    'linkMega': linkMega,
    'linkCuty': linkCuty
  };

  // Enviar los datos a Google Sheets usando fetch
  fetch('https://script.google.com/macros/s/AKfycbyzEXmJqY5l9KlHTJ9rWU81Sci_bRmcYhFoB9V79cuAxhKktIRAQd1yVXmAK8xiHSeE/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    // Limpiar los campos del formulario
    document.getElementById('formulario').reset();
    // Actualizar la página
    window.location.reload();
  })
  .catch(error => console.error('Error al enviar el formulario:', error));
});
