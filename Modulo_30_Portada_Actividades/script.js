document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los cuadros
  const boxes = document.querySelectorAll('.activity-box');

  // Agregar interactividad
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const link = box.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });
});
