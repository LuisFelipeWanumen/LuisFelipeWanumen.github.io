document.addEventListener("DOMContentLoaded", function () {
    // Datos de ejemplo
    const data = [
        { subject: 'Cálculo Diferencial', areas: ['Ciencias Basicas'], results: ['RA13'] },
        { subject: 'Cátedra Francisco José de Caldas', areas: ['Humanidades'], results: ['RA15', 'RA16', 'RA19'] },
        { subject: 'Álgebra Lineal', areas: ['Ciencias Basicas'], results: ['RA13'] },
        { subject: 'Cátedra Democracia y Ciudadanía', areas: ['Humanidades'], results: ['RA14'] },
        { subject: 'Producción y Comprensión de Textos I', areas: ['Humanidades'], results: ['RA14', 'RA17'] },
        { subject: 'Introducción a Algoritmos', areas: ['Profesional Basica'], results: ['RA9'] },
        { subject: 'Lógica Matemática', areas: ['Ciencias Basicas'], results: ['RA13'] },
        { subject: 'Física I: Mecánica Newtoniana', areas: ['Ciencias Basicas'], results: ['RA13'] },
        { subject: 'Cálculo Integral', areas: ['Ciencias Basicas'], results: ['RA7', 'RA9', 'RA13'] },
        { subject: 'Producción y comprensión de Textos II', areas: ['Humanidades'], results: ['RA14', 'RA17'] },
        { subject: 'Administración', areas: ['Economico Administrativa'], results: ['RA14', 'RA19'] },
        { subject: 'Cátedra de Contexto', areas: ['Humanidades'], results: ['RA15', 'RA19'] },
        { subject: 'Estructura de Datos', areas: ['Profesional Basica'], results: ['RA9'] },
        { subject: 'Programación Orientada a Objetos', areas: ['Profesional Basica'], results: ['RA8'] },
        { subject: 'Contabilidad General', areas: ['Economico Administrativa'], results: ['RA18'] },
        { subject: 'Fundamentos de Organización', areas: ['Economico Administrativa'], results: ['RA14', 'RA19'] },
        { subject: 'Física II: Electromagnetismo', areas: ['Ciencias Básicas'], results: ['RA13'] },
        { subject: 'Ciencia Tecnología y Sociedad', areas: ['Humanidades'], results: ['RA14	RA16', 'RA19'] },
        { subject: 'Programación Multinivel', areas: ['Profesional Tecnologia'], results: ['RA8', 'RA20'] },
        { subject: 'Bases de Datos', areas: ['Profesional Tecnologia'], results: ['RA7', 'RA11'] },
        { subject: 'Matemáticas Especiales', areas: ['Ciencias Basicas'], results: ['RA12', 'RA13'] },
        { subject: 'Análisis y métodos numéricos', areas: ['Ciencias Basicas'], results: ['RA9', 'RA12', 'RA13'] },
        { subject: 'Fundamentos de Economía', areas: ['Economico Administrativa'], results: ['RA18'] },
        { subject: 'Tic_s en las organizaciones', areas: ['Economico Administrativa'], results: ['RA15'] },
        { subject: 'Ética y Sociedad', areas: ['Humanidades'], results: ['RA19'] },
        { subject: 'Programación Avanzada', areas: ['Profesional Tecnologia'], results: ['RA8', 'RA20'] },
        { subject: 'Diseño Lógico', areas: ['Profesional Tecnologia'], results: ['RA5'] },
        { subject: 'Transmisión de Datos', areas: ['Profesional Ingenieria'], results: ['RA5'] },
        { subject: 'Aplicaciones para Internet', areas: ['Profesional Tecnologia'], results: ['RA8', 'RA20'] },
        { subject: 'Programación Web', areas: ['Profesional Tecnologia'], results: ['RA8', 'RA20'] },
        { subject: 'Bases de Datos Distribuidas', areas: ['Profesional Ingenieria'], results: ['RA7', 'RA10', 'RA11'] },
        { subject: 'Emprendimiento', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnología y Medio Ambiente', areas: ['Humanidades'], results: [''] },
        { subject: 'Análisis Social Colombiano', areas: ['Humanidades'], results: [''] },
        { subject: 'Globalización', areas: ['Humanidades'], results: [''] },
        { subject: 'Informática y Sociedad', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnología y el Mundo del Trabajo', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnociencias', areas: ['Humanidades'], results: [''] },
        { subject: 'Gestión de Calidad', areas: ['Humanidades'], results: [''] },
        { subject: 'Análisis de Sistemas', areas: ['Profesional Tecnologia'], results: ['RA8', 'RA20'] },
        { subject: 'Sistemas Operacionales', areas: ['Profesional Tecnologia'], results: ['RA5'] },
        { subject: 'Taller de Investigación', areas: ['Profesional Tecnologia'], results: ['RA18', 'RA19'] },
        { subject: 'Fundamentos de Telemática', areas: ['Profesional Ingenieria'], results: ['RA5'] },
        { subject: 'Protocolos de Comunicación', areas: ['Profesional Ingenieria'], results: ['RA5'] },
        { subject: 'Programación por Componentes', areas: ['Profesional Tecnologia'], results: ['RA8', 'RA10', 'RA20'] },
        { subject: 'Regulación para Telecomunicaciones', areas: ['Profesional Ingenieria'], results: ['RA16', 'RA19'] },
        { subject: 'Tecnología y Medio Ambiente', areas: ['Humanidades'], results: [''] },
        { subject: 'Análisis Social Colombiano', areas: ['Humanidades'], results: [''] },
        { subject: 'Globalización', areas: ['Humanidades'], results: [''] },
        { subject: 'Informática y Sociedad', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnología y el Mundo del Trabajo', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnociencias', areas: ['Humanidades'], results: [''] },
        { subject: 'Gestión de Calidad', areas: ['Humanidades'], results: [''] },
        { subject: 'Trabajo de Grado Tecnológico', areas: ['Profesional Tecnologia'], results: ['RA15', 'RA16'] },
        { subject: 'Inteligencia Artificial', areas: ['Profesional Tecnologia'], results: ['RA9'] },
        { subject: 'Arquitectura de Computadores', areas: ['Profesional Tecnologia'], results: ['RA5'] },
        { subject: 'Ecuaciones Diferenciales', areas: ['Ciencias Basicas'], results: ['RA9'] },
        { subject: 'Bases de Datos Avanzadas', areas: ['Profesional Tecnologia'], results: ['RA7', 'RA11'] },
        { subject: 'Ingeniería de Software', areas: ['Profesional Tecnologia'], results: ['RA8'] },
        { subject: 'Emprendimiento', areas: ['Economico Administrativa'], results: [''] },
        { subject: 'Tecnología y Medio Ambiente', areas: ['Humanidades'], results: [''] },
        { subject: 'Análisis Social Colombiano', areas: ['Humanidades'], results: [''] },
        { subject: 'Globalización', areas: ['Humanidades'], results: [''] },
        { subject: 'Informática y Sociedad', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnología y el Mundo del Trabajo', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnociencias', areas: ['Humanidades'], results: [''] },
        { subject: 'Gestión de Calidad', areas: ['Humanidades'], results: [''] },
        { subject: 'Cálculo Multivariado', areas: ['Ciencias Basicas'], results: ['RA1'] },
        { subject: 'Ingeniería Económica', areas: ['Economico Administrativa'], results: ['RA1', 'RA18'] },
        { subject: 'Probabilidad y Estadística', areas: ['Ciencias Basicas'], results: ['RA1'] },
        { subject: 'Sistemas Distribuidos', areas: ['Profesional Ingenieria'], results: ['RA2', 'RA3', 'RA5'] },
        { subject: 'Teoría General de Sistemas', areas: ['Profesional Ingenieria'], results: ['RA2'] },
        { subject: 'Física III: Ondas y Física Moderna', areas: ['Ciencias Basicas'], results: ['RA1', 'RA4'] },
        { subject: 'Formulación y Evaluación de Proyectos', areas: ['Economico Administrativa'], results: ['RA1', 'RA18'] },
        { subject: 'Análisis de Fourier', areas: ['Ciencias Basicas'], results: ['RA1', 'RA6'] },
        { subject: 'Redes Corporativas', areas: ['Profesional Ingenieria'], results: ['RA5'] },
        { subject: 'Sistemas Abiertos', areas: ['Profesional Ingenieria'], results: ['RA5'] },
        { subject: 'Teoría de la Información', areas: ['Profesional Ingenieria'], results: ['RA1'] },
        { subject: 'Computación Cuántica', areas: ['Profesional Ingenieria'], results: ['RA9'] },
        { subject: 'Simulación de Sistemas Dinámicos', areas: ['Profesional Ingenieria'], results: ['RA4', 'RA18'] },
        { subject: 'Criptología', areas: ['Profesional Ingenieria'], results: ['RA2', 'RA6', 'RA9'] },
        { subject: 'Investigación de Operaciones', areas: ['Ciencias Basicas'], results: ['RA18'] },
        { subject: 'Trabajo de Grado I', areas: ['Profesional Ingenieria'], results: ['RA15', 'RA16'] },
        { subject: 'Planificación y Diseño de Redes', areas: ['Profesional Ingenieria'], results: ['RA5', 'RA17', 'RA18'] },
        { subject: 'Redes de Alta Velocidad', areas: ['Profesional Ingenieria'], results: ['RA5', 'RA6'] },
        { subject: 'Seguridad en Redes', areas: ['Profesional Ingenieria'], results: [''] },
        { subject: 'Emprendimiento', areas: ['Economico Administrativa'], results: [''] },
        { subject: 'Tecnología y Medio Ambiente', areas: ['Humanidades'], results: [''] },
        { subject: 'Análisis Social Colombiano', areas: ['Humanidades'], results: [''] },
        { subject: 'Globalización', areas: ['Humanidades'], results: [''] },
        { subject: 'Informática y Sociedad', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnología y el Mundo del Trabajo', areas: ['Humanidades'], results: [''] },
        { subject: 'Tecnociencias', areas: ['Humanidades'], results: [''] },
        { subject: 'Gestión de Calidad', areas: ['Humanidades'], results: [''] },
        { subject: 'Análisis de Datos', areas: ['Profesional Ingenieria'], results: ['RA4'] },
        { subject: 'Bioinformática', areas: ['Profesional Ingenieria'], results: ['RA4'] },
        { subject: 'Gestión de Redes Telemáticas', areas: ['Profesional Ingenieria'], results: ['RA17'] },
        { subject: 'Seminario de Telemática', areas: ['Profesional Ingenieria'], results: ['RA15', 'RA18'] },
        { subject: 'Redes Inalámbricas', areas: ['Profesional Ingenieria'], results: [''] },
        { subject: 'Arquitectura Empresarial', areas: ['Profesional Ingenieria'], results: ['RA19'] },
        { subject: 'Trabajo de Grado II', areas: ['Profesional Ingenieria'], results: ['RA15', 'RA16'] },
        { subject: 'Gerencia y Auditoría en Redes', areas: ['Profesional Ingenieria'], results: [''] },


/*


*/

    ];

    // Descripciones de los resultados de aprendizaje (mnemotécnico y texto descriptivo)
    const resultDescriptions = {
        'RA1': 'Resultado 1: Mnemotécnico RA1 - Aplica modelos matemáticos para resolver problemas de ingeniería en soluciones telemáticas, considerando restricciones técnicas y de eficiencia.',
        'RA2': 'Resultado 2: Mnemotécnico RA2 - Diseña software para entornos de nube, teniendo en cuenta escalabilidad, seguridad y eficiencia.',
        'RA3': 'Resultado 3: Mnemotécnico RA3 - Diseña sistemas distribuidos con arquitecturas telemáticas, considerando criterios de eficiencia, escalabilidad y seguridad.',
        'RA4': 'Resultado 4: Mnemotécnico RA4 - Analiza datos a gran escala utilizando experimentación adecuada para obtener conclusiones informadas en ingeniería telemática.',
        'RA5': 'Resultado 5: Mnemotécnico RA5 - Diseña infraestructura telemática eficiente considerando los aspectos técnicos, económicos y sociales del entorno.',
        'RA6': 'Resultado 6: Mnemotécnico RA6 - Analiza problemas complejos de ingeniería telemática para proponer soluciones efectivas.',
        'RA7': 'Resultado 7: Mnemotécnico RA7 - Procesa datos para diseñar sistemas con arquitecturas de software.',
        'RA8': 'Resultado 8: Mnemotécnico RA8 - Construye sistemas informáticos para satisfacer las necesidades del entorno.',
        'RA9': 'Resultado 9: Mnemotécnico RA9 - Desarrolla algoritmos para la solución de problemas de ingeniería.',
        'RA10': 'Resultado 10: Mnemotécnico RA10 - Automatiza procesos para mejorar la eficiencia en entornos telemáticos.',
        'RA11': 'Resultado 11: Mnemotécnico RA11 - Diseña bases de datos para gestionar y organizar información en soluciones telemáticas.',
        'RA12': 'Resultado 12: Mnemotécnico RA12 - Evalúa problemas de complejidad algorítmica para optimizar soluciones en ingeniería telemática.',
        'RA13': 'Resultado 13: Mnemotécnico RA13 - Aplica técnicas matemáticas para analizar datos en el contexto de soluciones telemáticas.',
        'RA14': 'Resultado 14: Mnemotécnico RA14 - Trabaja en equipo en entornos colaborativos con habilidades interpersonales, de una manera ética.',
        'RA15': 'Resultado 15: Mnemotécnico RA15 - Aplica estrategias de autoaprendizaje continuo para la adquisición y actualización de conocimientos en el ámbito telemático.',
        'RA16': 'Resultado 16: Mnemotécnico RA16 - Ejecuta sus actuaciones con responsabilidad ética y profesional en el ámbito de la ingeniería telemática.',
        'RA17': 'Resultado 17: Mnemotécnico RA17 - Lidera equipos de gestión de proyectos en el contexto de la ingeniería telemática, promoviendo la buena comunicación y la claridad en los objetivos.',
        'RA18': 'Resultado 18: Mnemotécnico RA18 - Propone proyectos de ingeniería sustentando su viabilidad económica y técnica en el contexto de la ingeniería telemática.',
        'RA19': 'Resultado 19: Mnemotécnico RA19 - Analiza el contexto social considerando elementos de responsabilidad social en la práctica de la ingeniería telemática.',
        'RA20': 'Resultado 20: Mnemotécnico RA20 - Diseña sistemas con arquitecturas y patrones de software.',
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
            ['RA1', 'RA2', 'RA3', 'RA4', 'RA5','RA6', 'RA7', 'RA8', 'RA9', 'RA10', 'RA11', 'RA12', 'RA13', 'RA14', 'RA15','RA16', 'RA17', 'RA18', 'RA19', 'RA20'].forEach((result, index) => {
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
