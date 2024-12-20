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
                { name: 'Muy alta', y: 20, description: 'Relación muy alta con los resultados de aprendizaje. Los estudiantes muestran un dominio excepcional en esta área.' },
                { name: 'Alta', y: 18, description: 'Relación alta, con un buen entendimiento del contenido, aunque con áreas para mejorar.' },
                { name: 'Media', y: 12, description: 'Relación media, muestra comprensión básica pero con vacíos importantes.' },
                { name: 'Baja', y: 8, description: 'Relación baja, donde la comprensión es limitada y requiere atención específica.' },
                { name: 'Nula', y: 3, description: 'Relación nula, los estudiantes no muestran conocimiento significativo en esta área.' }
            ],
            2: [
                { name: 'Muy alta', y: 22, description: 'Los estudiantes tienen una gran comprensión del tema, con habilidades excepcionales.' },
                { name: 'Media', y: 15, description: 'Comprensión moderada, pero con oportunidad para mejorar en algunas áreas.' },
                { name: 'Baja', y: 8, description: 'La comprensión es superficial, y los estudiantes necesitan atención adicional.' }
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
            }],
            plotOptions: {
                column: {
                    point: {
                        events: {
                            click: function () {
                                const selectedData = data[tableIndex].find(item => item.name === this.category);
                                // Mostrar explicación del dato al hacer click
                                $('#data-description').text(selectedData.description);
                            }
                        }
                    }
                }
            }
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
