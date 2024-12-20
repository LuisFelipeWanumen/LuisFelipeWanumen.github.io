document.addEventListener("DOMContentLoaded", function() {
    // Datos de prueba
    const results = [
        { id: 1, name: "RA1" },
        { id: 2, name: "RA2" },
        { id: 3, name: "RA3" }
    ];

    const subjects = [
        { id: 1, name: "Materia 1", architecture: "Arquitectura de Datos" },
        { id: 2, name: "Materia 2", architecture: "Arquitectura de Negocio" },
        { id: 3, name: "Materia 3", architecture: "Arquitectura de Aplicación" }
    ];

    const assignments = [
        { id: 1, subjectId: 1, resultId: 1 },
        { id: 2, subjectId: 1, resultId: 2 },
        { id: 3, subjectId: 2, resultId: 3 },
        { id: 4, subjectId: 3, resultId: 1 },
        { id: 5, subjectId: 3, resultId: 2 }
    ];

    const learningResultDropdown = document.getElementById("learning-result");

    // Función para poblar el desplegable de resultados de aprendizaje
    function populateDropdown() {
        results.forEach(result => {
            const option = document.createElement("option");
            option.value = result.id;
            option.textContent = result.name;
            learningResultDropdown.appendChild(option);
        });
    }

    // Función para renderizar la tabla dinámica
    function renderTable(selectedResultId) {
        const tableContainer = document.getElementById("table-container");
        tableContainer.innerHTML = ''; // Limpiar contenedor antes de renderizar

        const table = document.createElement("table");

        const header = table.createTHead();
        const headerRow = header.insertRow();
        headerRow.insertCell().textContent = "Materia";
        headerRow.insertCell().textContent = "Arquitectura";
        headerRow.insertCell().textContent = "Resultado de Aprendizaje";
        headerRow.insertCell().textContent = "Acción";

        const body = table.createTBody();
        
        assignments.forEach(assignment => {
            const subject = subjects.find(sub => sub.id === assignment.subjectId);
            const result = results.find(res => res.id === assignment.resultId);

            const row = body.insertRow();
            row.insertCell().textContent = subject.name;
            row.insertCell().textContent = subject.architecture;
            row.insertCell().textContent = result.name;

            const actionCell = row.insertCell();
            const actionBtn = document.createElement("button");
            actionBtn.textContent = "Ver Razones";
            actionBtn.classList.add("highlight-blue");
            actionBtn.onclick = () => showReasons(assignment);
            actionCell.appendChild(actionBtn);

            if (assignment.resultId === selectedResultId) {
                row.classList.add("highlight-green");
                actionBtn.classList.add("highlight-green");
            } else {
                row.classList.add("highlight-blue");
                actionBtn.classList.add("highlight-blue");
            }
        });

        tableContainer.appendChild(table);
    }

    // Función para mostrar razones en una ventana emergente
    function showReasons(assignment) {
        alert(`Razones por las cuales no fue seleccionada: Asignación ID: ${assignment.id}`);
    }

    // Función para activar/desactivar pantalla completa
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Inicializar el desplegable y la tabla
    populateDropdown();
    renderTable(results[0].id);  // Mostrar la tabla con el primer resultado de aprendizaje seleccionado

    // Cambiar la tabla cuando se selecciona un resultado de aprendizaje
    learningResultDropdown.addEventListener("change", function(e) {
        const selectedResultId = parseInt(e.target.value);
        renderTable(selectedResultId);
    });

});
