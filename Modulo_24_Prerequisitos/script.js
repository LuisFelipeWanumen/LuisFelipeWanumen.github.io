// Datos de ejemplo para las asignaturas
const data = {
    1: [
        {
            asignatura: "Cálculo Diferencial",
            semestre: 1,
            prerrequisitos: "Ninguno",
            so: "SO1, SO6",
            ra: "RA1, RA4, RA13",
            profundidad: "Introducción a conceptos matemáticos básicos y su aplicación en ingeniería."
        },
        {
            asignatura: "Cátedra Francisco José de Caldas",
            semestre: 1,
            prerrequisitos: "Ninguno",
            so: "Ninguno",
            ra: "Ninguno",
            profundidad: "Contexto institucional"
        }
    ],
    2: [
        {
            asignatura: "Física Mecánica",
            semestre: 2,
            prerrequisitos: "Cálculo Diferencial",
            so: "SO1, SO3",
            ra: "RA5, RA6",
            profundidad: "Fundamentos de física clásica aplicados a ingeniería."
        }
    ]
};

// Genera filas dinámicamente en las tablas
$(document).ready(() => {
    for (const [semestre, asignaturas] of Object.entries(data)) {
        const tableBody = $(`#table-semester-${semestre} tbody`);
        asignaturas.forEach(asignatura => {
            tableBody.append(`
                <tr>
                    <td>${asignatura.asignatura}</td>
                    <td>${asignatura.semestre}</td>
                    <td>${asignatura.prerrequisitos}</td>
                    <td>${asignatura.so}</td>
                    <td>${asignatura.ra}</td>
                    <td>${asignatura.profundidad}</td>
                </tr>
            `);
        });
    }

    // Activa DataTables para cada tabla
    $('.semester-table').DataTable();
});
