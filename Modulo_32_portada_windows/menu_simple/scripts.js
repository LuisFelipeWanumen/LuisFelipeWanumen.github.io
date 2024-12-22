function cambiarBarra(opcion) {
    // Ocultar todas las barras
    const barras = document.querySelectorAll('.barra');
    barras.forEach(b => b.classList.remove('show'));
    
    // Mostrar la barra correspondiente a la opción seleccionada
    const barraSeleccionada = document.getElementById(opcion);
    if (barraSeleccionada) {
        barraSeleccionada.classList.add('show');
    }
}
