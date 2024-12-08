document.addEventListener('DOMContentLoaded', function() {
    const clickableCells = document.querySelectorAll('.clickable');
    const justificationElement = document.querySelector('#justification p');

    clickableCells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Cambiar el estilo de la celda activa
            this.classList.toggle('active');

            // Mostrar la justificación al hacer clic
            const justificationText = this.getAttribute('data-justification');
            
            // Mostrar el texto de la justificación con una animación suave
            justificationElement.textContent = justificationText;
            justificationElement.classList.add('show');

            // Eliminar la clase 'show' después de un tiempo para permitir que la justificación se oculte al cambiar de celda
            setTimeout(() => {
                justificationElement.classList.remove('show');
            }, 5000);  // Ocultar después de 5 segundos
        });
    });

    // Modo nocturno (opcional)
    const nightModeToggle = document.createElement('button');
    nightModeToggle.textContent = 'Modo Nocturno';
    nightModeToggle.style.position = 'fixed';
    nightModeToggle.style.top = '20px';
    nightModeToggle.style.right = '20px';
    nightModeToggle.style.padding = '10px 20px';
    nightModeToggle.style.backgroundColor = '#333';
    nightModeToggle.style.color = '#fff';
    nightModeToggle.style.border = 'none';
    nightModeToggle.style.borderRadius = '5px';
    nightModeToggle.style.cursor = 'pointer';
    document.body.appendChild(nightModeToggle);

    nightModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
    });
});
