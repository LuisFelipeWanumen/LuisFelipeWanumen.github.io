document.addEventListener("DOMContentLoaded", () => {
    const assignmentsTable = document.getElementById("assignments").querySelector("tbody");
    const reasonsTable = document.getElementById("reasons").querySelector("tbody");
    const toggleMenuBtn = document.getElementById("toggle-menu");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const fullscreenBtn = document.getElementById("fullscreen");
    const exportPdfBtn = document.getElementById("export-pdf");

    // Datos simulados
    const subjects = [
        { name: "Asignatura 1", results: [{ id: 1, name: "RA1", selected: true, reason: "" }, { id: 2, name: "RA2", selected: false, reason: "Falta alineación curricular" }] },
        { name: "Asignatura 2", results: [{ id: 3, name: "RA3", selected: false, reason: "Revisión pendiente" }] },
    ];

    // Generar tabla principal
    subjects.forEach(subject => {
        subject.results.forEach(result => {
            const row = document.createElement("tr");
            row.classList.add(result.selected ? "selected" : "not-selected");
            row.innerHTML = `
                <td>${subject.name}</td>
                <td>${result.name}</td>
                <td>${result.selected ? "Seleccionado" : "No Seleccionado"}</td>
            `;
            if (!result.selected) {
                row.addEventListener("click", () => {
                    displayReason(result);
                });
            }
            assignmentsTable.appendChild(row);
        });
    });

    // Mostrar razones
    function displayReason(result) {
        reasonsTable.innerHTML = `
            <tr>
                <td>${result.name}</td>
                <td>${result.reason}</td>
            </tr>
        `;
    }

    // Manejo del menú lateral
    toggleMenuBtn.addEventListener("click", () => {
        const isCollapsed = sidebar.offsetWidth <= 50;
        sidebar.style.width = isCollapsed ? "250px" : "50px";
        content.style.marginLeft = isCollapsed ? "250px" : "50px";
    });

    // Pantalla completa
    fullscreenBtn.addEventListener("click", () => {
        const table = document.querySelector(".main-table");
        table.classList.toggle("fullscreen");
    });

    // Exportar a PDF
    // exportPdfBtn.addEventListener("click", () => {
    //     const { jsPDF } = window.jspdf;
    //     const doc = new jsPDF();
    //     doc.text("Resultados de Aprendizaje", 10, 10);
    //     doc.autoTable({ html: "#assignments" });
    //     doc.save("resultados.pdf");
    // });

    // Exportar a PDF usando html2pdf.js
    exportPdfBtn.addEventListener("click", () => {
        const element = document.querySelector(".main-table");
        const opt = {
            margin: 1,
            filename: 'resultados.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });
});
