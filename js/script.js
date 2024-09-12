// Agregamos un evento de clic al botón de envío del formulario 1
document.getElementById('enviar2').addEventListener('click', function(e) {
    e.preventDefault(); // Evitamos que se envíe el formulario
    document.getElementById('formulario1').style.display = 'none'; // Ocultamos el formulario 1
    document.getElementById('formulario2').style.display = 'block'; // Mostramos el formulario 2
  });
  
  // Agregamos un evento de clic al botón de envío del formulario 2
  document.getElementById('enviar3').addEventListener('click', function(e) {
    e.preventDefault(); // Evitamos que se envíe el formulario
    document.getElementById('formulario2').style.display = 'none'; // Ocultamos el formulario 2
    document.getElementById('formulario3').style.display = 'block'; // Mostramos el formulario 3
  });


// document.addEventListener('DOMContentLoaded', function () {
//     // Obtener todos los elementos de las estrellas
//     const stars = document.querySelectorAll('.star-label');


//     stars.forEach(star => {
//         star.addEventListener('click', function () {
//             // Desmarcar todas las estrellas
//             stars.forEach(star => star.classList.remove('selected'));

//             // Marcar la estrella clicada
//             this.classList.add('selected');

//             // Seleccionar el radio button correspondiente
//             const radioId = this.getAttribute('for');
//             document.getElementById(radioId).checked = true;
//         });
//     });
// });
