// Lista de imágenes SVG
const svgFiles = ["plan_01.svg", "plan_02.svg", "plan_03.svg", "plan_04.svg"];
let currentIndex = 0;

// Elementos DOM
const svgImage = document.getElementById("svgImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const resetBtn = document.getElementById("resetBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const viewerContainer = document.querySelector(".viewer-container");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");

// Inicializa Panzoom
const panzoom = Panzoom(svgImage, {
    maxScale: 4,
    minScale: 1,
    contain: "outside",
});
svgImage.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);

// Actualiza la imagen SVG
function updateImage(index) {
    svgImage.src = svgFiles[index];
}

// Cambia al siguiente o anterior
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + svgFiles.length) % svgFiles.length;
    updateImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % svgFiles.length;
    updateImage(currentIndex);
});

// Controles de zoom
zoomInBtn.addEventListener("click", () => panzoom.zoomIn());
zoomOutBtn.addEventListener("click", () => panzoom.zoomOut());
resetBtn.addEventListener("click", () => panzoom.reset());

// Pantalla completa
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        viewerContainer.requestFullscreen()
            .then(() => fullscreenBtn.textContent = "⛶ Salir Pantalla Completa")
            .catch(err => console.error("Error al entrar en pantalla completa:", err));
    } else {
        document.exitFullscreen()
            .then(() => fullscreenBtn.textContent = "⛶ Pantalla Completa")
            .catch(err => console.error("Error al salir de pantalla completa:", err));
    }
});

// Cambiar fondo y mostrar controles exclusivos
document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        document.body.classList.add("fullscreen-mode");
    } else {
        document.body.classList.remove("fullscreen-mode");
    }
});

// Atajos de teclado en pantalla completa
document.addEventListener("keydown", (event) => {
    if (document.fullscreenElement) {
        switch (event.key) {
            case "+":
                panzoom.zoomIn();
                break;
            case "-":
                panzoom.zoomOut();
                break;
            case "ArrowUp":
                panzoom.pan(0, -50);
                break;
            case "ArrowDown":
                panzoom.pan(0, 50);
                break;
            case "ArrowLeft":
                panzoom.pan(-50, 0);
                break;
            case "ArrowRight":
                panzoom.pan(50, 0);
                break;
        }
    }
});
