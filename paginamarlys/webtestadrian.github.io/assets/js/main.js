// Espera a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la imagen del DOM
    const img = document.querySelector(".cinta2 img");
  
    // Reduce el brillo de la imagen (valor entre 0 y 1, donde 0 es totalmente oscuro)
    img.style.filter = "brightness(0.4)"; // Puedes ajustar el valor para obtener el nivel de oscuridad deseado
  });
  