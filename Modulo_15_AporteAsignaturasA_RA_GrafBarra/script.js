// Este script manejará la navegación y la integración de las tablas usando Highcharts.

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
        Highcharts.chart(`highcharts-container-${tableIndex}`, {
            chart: {
                type: 'column'
            },
            title: {
                text: `Tabla ${tableIndex} - Relación con Resultados de Aprendizaje`
            },
            xAxis: {
                categories: ['Resultado de Aprendizaje 1', 'Resultado de Aprendizaje 2', 'Resultado de Aprendizaje 3', 'Resultado de Aprendizaje 4'],
                title: {
                    text: 'Resultados de Aprendizaje'
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
                data: [20, 15, 30, 35] // Reemplaza con los datos correspondientes
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
