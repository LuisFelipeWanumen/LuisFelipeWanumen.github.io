document.addEventListener("DOMContentLoaded", function () {
    // Datos de ejemplo
    const data = [
        { subject: 'Cálculo Diferencial', areas: ['Matemáticas'], results: ['RA1', 'RA2', 'RA3', 'RA4', 'RA5'] },
        { subject: 'Álgebra Lineal', areas: ['Matemáticas'], results: ['RA1', 'RA2', 'RA3', 'RA5'] },
        { subject: 'Programación', areas: ['Programación'], results: ['RA2', 'RA3', 'RA4'] },
        { subject: 'Física I', areas: ['Ciencias Básicas'], results: ['RA1', 'RA2', 'RA5'] },
        { subject: 'Electromagnetismo', areas: ['Ciencias Básicas', 'Matemáticas'], results: ['RA3', 'RA4'] }
    ];

    // Descripciones de los resultados de aprendizaje (mnemotécnico y texto descriptivo)
    const resultDescriptions = {
        'RA1': 'Resultado 1: Mnemotécnico RA1 - Comprende los fundamentos básicos.',
        'RA2': 'Resultado 2: Mnemotécnico RA2 - Aplica los conceptos a situaciones reales.',
        'RA3': 'Resultado 3: Mnemotécnico RA3 - Desarrolla soluciones creativas a problemas.',
        'RA4': 'Resultado 4: Mnemotécnico RA4 - Evalúa resultados de manera crítica.',
        'RA5': 'Resultado 5: Mnemotécnico RA5 - Comunica resultados de forma clara y coherente.'
    };

    // Referencias a los elementos HTML
    const areaFilter = document.getElementById('area-filter');
    const resultFilter = document.getElementById('result-filter');
    const multiAreaFilter = document.getElementById('multi-area-filter');
    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const resultDescription = document.getElementById('result-description');

    // Función para filtrar los resultados de aprendizaje
    function filterResultsByArea() {
        const selectedResult = resultFilter.value;
        const isMultiAreaChecked = multiAreaFilter.checked;

        let filteredData = data;

        // Filtrar según el área seleccionada
        const areaFilterValue = areaFilter.value;
        if (areaFilterValue !== 'Todos') {
            filteredData = filteredData.filter(item => item.areas.includes(areaFilterValue));
        }

        // Filtrar según el resultado de aprendizaje seleccionado
        if (selectedResult !== 'Todos') {
            filteredData = filteredData.filter(item => item.results.includes(selectedResult));
        }

        // Filtrar resultados de aprendizaje asociados a varias áreas
        if (isMultiAreaChecked) {
            filteredData = filteredData.filter(item => item.areas.length > 1);
        }

        generateTable(filteredData);
    }

    // Función para generar la tabla
    function generateTable(filteredData) {
        dataTable.innerHTML = ''; // Limpiar la tabla

        filteredData.forEach(item => {
            const row = dataTable.insertRow();
            const subjectCell = row.insertCell(0);
            subjectCell.textContent = item.subject;

            // Iterar sobre los resultados y mostrar los mnemotécnicos en las celdas
            ['RA1', 'RA2', 'RA3', 'RA4', 'RA5'].forEach((result, index) => {
                const resultCell = row.insertCell(index + 1); // La columna correspondiente
                if (item.results.includes(result)) {
                    resultCell.textContent = result; // Mnemotécnico
                    resultCell.dataset.result = result; // Añadir el resultado como data-atributo
                    resultCell.dataset.subject = item.subject; // Añadir la asignatura
                } else {
                    resultCell.textContent = ''; // Si no hay resultado, dejar la celda vacía
                }
            });
        });
    }

    // Función para mostrar la descripción del resultado de aprendizaje al hacer clic en una celda
    function showResultDescription(event) {
        const cell = event.target;
        if (cell.dataset.result) {
            const result = cell.dataset.result;
            const subject = cell.dataset.subject;
            resultDescription.textContent = `Descripción para "${subject}" y el resultado "${result}": ${resultDescriptions[result]}`;
        }
    }

    // Event listeners para los filtros
    areaFilter.addEventListener('change', filterResultsByArea);
    resultFilter.addEventListener('change', filterResultsByArea);
    multiAreaFilter.addEventListener('change', filterResultsByArea);

    // Event listener para la tabla (cuando se hace clic en una celda de resultado)
    dataTable.addEventListener('click', showResultDescription);

    // Inicializar la tabla con todos los datos
    filterResultsByArea();
});
