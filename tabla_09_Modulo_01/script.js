// publicapis.dev
/*
// Datos simulados
const chartData = {
  semesters: ['2020-1', '2020-2', '2021-1', '2021-2'],
  rates: [15, 20, 10, 5]
};

// Función para renderizar la gráfica
function renderChart(data) {
  Highcharts.chart('chart-container', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Tasa de Reprobación por Semestre'
    },
    xAxis: {
      categories: data.semesters
    },
    yAxis: {
      title: {
        text: 'Tasa de Reprobación (%)'
      }
    },
    series: [{
      name: 'Tasa de Reprobación',
      data: data.rates
    }],
    exporting: {
      enabled: true
    }
  });
}

// Renderizar gráfica al cargar la página
renderChart(chartData);
*/




// Fullscreen para la gráfica
document.getElementById('fullscreen-chart').addEventListener('click', () => {
  const chart = Highcharts.charts[0];
  chart.fullscreen.toggle();
});

// Evento para mostrar gráfica con datos dinámicos (enlace a filtros)
document.getElementById('show-chart').addEventListener('click', () => {
  // Aquí iría lógica para obtener datos filtrados y llamar renderChart
  renderChart(chartData);
});



document.getElementById('print-table').addEventListener('click', () => {
  const printWindow = window.open('', '', 'height=600,width=800');
  const tableHtml = document.getElementById('data-table').outerHTML;

  printWindow.document.write(`
    <html>
    <head>
      <title>Tabla de Deserción</title>
      <style>
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 10px; border: 1px solid #ccc; text-align: center; }
      </style>
    </head>
    <body>
      <h1>Tabla de Deserción</h1>
      ${tableHtml}
    </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
});


// Datos de ejemplo
const materias = [
  { 
    nombre: "1 - CALCULO DIFERENCIAL", 
    area: "Ciencias Básicas",
    datos: [
      { semestre: "2020-1", inscritos: 180, reprobados: 36 },
      { semestre: "2020-3", inscritos: 149, reprobados: 86 },
      { semestre: "2021-1", inscritos: 138, reprobados: 53 },
      { semestre: "2021-3", inscritos: 166, reprobados: 98 },
      { semestre: "2022-1", inscritos: 176, reprobados: 101 },
      { semestre: "2022-3", inscritos: 175, reprobados: 118 },
      { semestre: "2023-1", inscritos: 225, reprobados: 136 },
      { semestre: "2023-2", inscritos: 26, reprobados: 4 },
      { semestre: "2023-3", inscritos: 192, reprobados: 178 },
      { semestre: "2024-1", inscritos: 216, reprobados: 81 },      
    ]
  },
  {
    nombre: "3 - FISICA I: MECANICA NEWTONIANA",
    area: "Ciencias Básicas",
    datos: [
      { semestre: "2020-1", inscritos: 180, reprobados: 36 },
      { semestre: "2020-3", inscritos: 124, reprobados: 40 },
      { semestre: "2021-1", inscritos: 133, reprobados: 39 },
      { semestre: "2021-3", inscritos: 218, reprobados: 48 },
      { semestre: "2022-1", inscritos: 113, reprobados: 52 },
      { semestre: "2022-3", inscritos: 86, reprobados: 40 },
      { semestre: "2023-1", inscritos: 77, reprobados: 16 },
      { semestre: "2023-3", inscritos: 106, reprobados: 20 },
      { semestre: "2024-1", inscritos: 120, reprobados: 38 },
    ]
  },
  {
    nombre: "4 - CATEDRA FRANCISCO JOSE DE CALDAS",
    area: "Humanidades",
    datos: [
      { semestre: "2020-1", inscritos: 126, reprobados: 18 },
      { semestre: "2020-3", inscritos: 135, reprobados: 25 },
      { semestre: "2021-1", inscritos: 116, reprobados: 24 },
      { semestre: "2021-3", inscritos: 138, reprobados: 37 },
      { semestre: "2022-1", inscritos: 129, reprobados: 33 },
      { semestre: "2022-3", inscritos: 121, reprobados: 37 },
      { semestre: "2023-1", inscritos: 158, reprobados: 30 },
      { semestre: "2023-2", inscritos: 2, reprobados: 0 },
      { semestre: "2023-3", inscritos: 132, reprobados: 37 },
      { semestre: "2024-1", inscritos: 186, reprobados: 36 },
    ]
  },
  {
    nombre: "7 - CALCULO INTEGRAL",
    area: "Ciencias Básicas",
    datos: [
      { semestre: "2020-1", inscritos: 91, reprobados: 7 },
      { semestre: "2020-3", inscritos: 142, reprobados: 21 },
      { semestre: "2021-1", inscritos: 114, reprobados: 30 },
      { semestre: "2021-3", inscritos: 118, reprobados: 61 },
      { semestre: "2022-1", inscritos: 110, reprobados: 65 },
      { semestre: "2022-3", inscritos: 120, reprobados: 58 },
      { semestre: "2023-1", inscritos: 104, reprobados: 58 },
      { semestre: "2023-3", inscritos: 166, reprobados: 91 },
      { semestre: "2024-1", inscritos: 180, reprobados: 95 },
    ]
  },
  {
    nombre: "8 - HISTORIA Y CULTURA COLOMBIANA",
    area: "Humanidades - Electiva",
    datos: [
      { semestre: "2020-1", inscritos: 1, reprobados: 0 },
      { semestre: "2020-3", inscritos: 1, reprobados: 0 },
      { semestre: "2021-1", inscritos: 1, reprobados: 0 },
      { semestre: "2022-1", inscritos: 3, reprobados: 0 },
      { semestre: "2022-3", inscritos: 1, reprobados: 0 },
      { semestre: "2023-3", inscritos: 3, reprobados: 0 },
      { semestre: "2024-1", inscritos: 5, reprobados: 1 },
    ]
  },
  {
    nombre: "9 - ALGEBRA LINEAL",
    area: "Ciencias Básicas",
    datos: [
      { semestre: "2020-1", inscritos: 171, reprobados: 53 },
      { semestre: "2020-3", inscritos: 156, reprobados: 49 },
      { semestre: "2021-1", inscritos: 145, reprobados: 50 },
      { semestre: "2021-3", inscritos: 158, reprobados: 78 },
      { semestre: "2022-1", inscritos: 166, reprobados: 79 },
      { semestre: "2022-3", inscritos: 154, reprobados: 96 },
      { semestre: "2023-1", inscritos: 211, reprobados: 123 },
      { semestre: "2023-3", inscritos: 203, reprobados: 90 },
      { semestre: "2024-1", inscritos: 224, reprobados: 116 },      
    ]
  },
];

// Referencias a los elementos de la página
const tableBody = document.getElementById("table-body");
const areaFilter = document.getElementById("area-filter");
const searchMateria = document.getElementById("search-materia");

// Función para calcular la tasa de reprobación
function calcularTasa(inscritos, reprobados) {
  return ((reprobados / inscritos) * 100).toFixed(2);
}

// Función para cargar datos en la tabla
function cargarTabla(materiasFiltradas) {
  tableBody.innerHTML = ""; // Limpiar tabla
  materiasFiltradas.forEach((materia) => {
    materia.datos.forEach((dato) => {
      const row = `
        <tr>
          <td>${materia.nombre}</td>
          <td>${materia.area}</td>
          <td>${dato.semestre}</td>
          <td>${dato.inscritos}</td>
          <td>${dato.reprobados}</td>
          <td>${calcularTasa(dato.inscritos, dato.reprobados)}%</td>
        </tr>`;
      tableBody.innerHTML += row;
    });
  });
}

// Función para cargar las áreas en el filtro
function cargarAreas() {
  const areas = [...new Set(materias.map((materia) => materia.area))];
  areaFilter.innerHTML = "<option value=''>Todas las áreas</option>";
  areas.forEach((area) => {
    areaFilter.innerHTML += `<option value="${area}">${area}</option>`;
  });
}




const graficaContainer = document.getElementById("grafica-container");
// Función para preparar datos de la gráfica desde la tabla
function generarDatosGrafica(materiasFiltradas) {
  const seriesData = materiasFiltradas.map((materia) => {
    return {
      name: materia.nombre,
      data: materia.datos.map((dato) => ({
        name: dato.semestre,
        y: parseFloat(calcularTasa(dato.inscritos, dato.reprobados)),
      })),
    };
  });

  return seriesData;
}

// Función para actualizar la gráfica
function actualizarGrafica(materiasFiltradas) {
  const seriesData = generarDatosGrafica(materiasFiltradas);

  Highcharts.chart(graficaContainer, {
    chart: {
      type: "line",
    },
    title: {
      text: "Comportamiento de la Tasa de Reprobación",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Semestre",
      },
    },
    yAxis: {
      title: {
        text: "Tasa de Reprobación (%)",
      },
      min: 0,
      max: 100,
    },
    tooltip: {
      pointFormat: "<b>{point.y:.2f}%</b>",
    },
    series: seriesData,
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
  });
}








// Filtrar materias por área y búsqueda
function filtrarMaterias() {
  const areaSeleccionada = areaFilter.value.toLowerCase();
  const textoBusqueda = searchMateria.value.toLowerCase();

  const materiasFiltradas = materias.filter((materia) => {
    const perteneceArea =
      areaSeleccionada === "" || materia.area.toLowerCase() === areaSeleccionada;
    const coincideTexto =
      textoBusqueda === "" ||
      materia.nombre.toLowerCase().includes(textoBusqueda);
    return perteneceArea && coincideTexto;
  });

  cargarTabla(materiasFiltradas);
  actualizarGrafica(materiasFiltradas); // Sincroniza la gráfica
}

// Inicialización de la página
cargarAreas();
cargarTabla(materias);
actualizarGrafica(materias); // Inicializa la gráfica

// Eventos para filtrar
areaFilter.addEventListener("change", filtrarMaterias);
searchMateria.addEventListener("input", filtrarMaterias);


