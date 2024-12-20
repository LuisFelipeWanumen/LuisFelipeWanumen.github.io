// Datos de prueba para semestres y asignaturas
const data = [
    {
        semester: "Semestre 1",
        subjects: [
            { name: "Asignatura 1", results: generateResults() },
            { name: "Asignatura 2", results: generateResults() },
            // Más asignaturas...
        ]
    },
    {
        semester: "Semestre 2",
        subjects: [
            { name: "Asignatura A", results: generateResults() },
            { name: "Asignatura B", results: generateResults() },
            // Más asignaturas...
        ]
    },
    {
        semester: "Semestre 3",
        subjects: [
            { name: "Asignatura X", results: generateResults() },
            { name: "Asignatura Y", results: generateResults() },
            // Más asignaturas...
        ]
    },
    // Más semestres...
];

// Generación de resultados de aprendizaje de prueba
function generateResults() {
    let results = [];
    for (let i = 1; i <= 20; i++) {
        results.push({
            result: `Resultado ${i}`,
            relation: "Alta",  // Default value
            percentage: 75,    // Default value
            justification: `Justificación del Resultado ${i}`
        });
    }
    return results;
}

// Mostrar los datos del semestre seleccionado
function showSemester(index) {
    const semesterData = data[index];
    const contentDiv = document.getElementById("semester-content");
    contentDiv.innerHTML = ""; // Limpiar el contenido previo

    semesterData.subjects.forEach(subject => {
        const subjectTable = document.createElement("div");
        subjectTable.classList.add("subject-table");

        const tableHTML = `
            <h3>${subject.name}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Resultado de Aprendizaje</th>
                        <th>Relación</th>
                        <th>Porcentaje</th>
                        <th>Justificación</th>
                    </tr>
                </thead>
                <tbody>
                    ${subject.results.map(result => `
                        <tr>
                            <td>${result.result}</td>
                            <td><input type="text" value="${result.relation}" /></td>
                            <td><input type="number" value="${result.percentage}" /></td>
                            <td><input type="text" value="${result.justification}" /></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        subjectTable.innerHTML = tableHTML;
        contentDiv.appendChild(subjectTable);
    });

    // Actualizar la pestaña activa
    const tabs = document.querySelectorAll(".tab-button");
    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}

// Filtrar asignaturas en base a la búsqueda
function searchSubject() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const semesterContent = document.getElementById("semester-content");
    const subjectTables = semesterContent.getElementsByClassName("subject-table");

    Array.from(subjectTables).forEach(table => {
        const subjectName = table.querySelector("h3").innerText.toLowerCase();
        if (subjectName.includes(query)) {
            table.style.display = '';
        } else {
            table.style.display = 'none';
        }
    });
}

// Inicializar la vista con el primer semestre
showSemester(0);
