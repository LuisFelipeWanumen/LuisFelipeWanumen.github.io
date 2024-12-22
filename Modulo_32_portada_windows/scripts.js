// Desplazamiento suave al hacer clic en un enlace
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para un mejor desplazamiento
            behavior: 'smooth'
        });
    });
});
