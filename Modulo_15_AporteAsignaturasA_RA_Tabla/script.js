$(document).ready(function () {
    const totalTables = 2; // Cambia a 71 cuando agregues todas las tablas
    let currentTable = 1;

    // Función para mostrar una tabla específica
    function showTable(tableIndex) {
        // Oculta todas las tablas
        $('.table').hide();
        // Muestra la tabla seleccionada
        $(`#table-${tableIndex}`).show();

        // Actualiza los botones de navegación
        if (tableIndex === 1) {
            $('#prev-table').prop('disabled', true);
        } else {
            $('#prev-table').prop('disabled', false);
        }

        if (tableIndex === totalTables) {
            $('#next-table').prop('disabled', true);
        } else {
            $('#next-table').prop('disabled', false);
        }

        // Configura Highcharts para mostrar los datos en la tabla seleccionada
        renderHighcharts(tableIndex);
    }

    // Función para renderizar Highcharts en el contenedor
    function renderHighcharts(tableIndex) {
        // Datos de la tabla proporcionada
        const data = {
            1: [
                { name: 'Muy alta', y: 20 },
                { name: 'Alta', y: 18 },
                { name: 'Alta', y: 12 },
                { name: 'Alta', y: 10 },
                { name: 'Alta', y: 9 },
                { name: 'Alta', y: 8 },
                { name: 'Media', y: 7 },
                { name: 'Media', y: 6 },
                { name: 'Media', y: 5 },
                { name: 'Media', y: 5 },
                { name: 'Media', y: 4 },
                { name: 'Baja', y: 3 },
                { name: 'Baja', y: 3 },
                { name: 'Baja', y: 3 },
                { name: 'Baja', y: 3 },
                { name: 'Baja', y: 2 },
                { name: 'Baja', y: 2 },
                { name: 'Baja', y: 2 },
                { name: 'Nula', y: 1 }
            ],
            2: [
                { name: 'Muy alta', y: 22 },
                { name: 'Alta', y: 15 },
                { name: 'Media', y: 10 },
                { name: 'Baja', y: 8 }
            ]
        };

        Highcharts.chart(`highcharts-container-${tableIndex}`, {
            chart: {
                type: 'column'
            },
            title: {
                text: `Tabla ${tableIndex} - Relación con Resultados de Aprendizaje`
            },
            xAxis: {
                categories: data[tableIndex].map(item => item.name),
                title: {
                    text: 'Nivel de Relación'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Porcentaje'
                }
            },
            series: [{
                name: 'Porcentaje',
                data: data[tableIndex].map(item => item.y)
            }]
        });
    }

    // Navegación de las tablas
    $('#next-table').click(function () {
        if (currentTable < totalTables) {
            currentTable++;
            showTable(currentTable);
        }
    });

    $('#prev-table').click(function () {
        if (currentTable > 1) {
            currentTable--;
            showTable(currentTable);
        }
    });

    // Inicializar la primera tabla
    showTable(currentTable);
});
