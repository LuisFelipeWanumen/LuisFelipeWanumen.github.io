// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Categorias
  const resultadosAprendizaje = Array.from({ length: 20 }, (_, i) => `RA${i + 1}`);
  const espaciosAcademicos = Array.from({ length: 60 }, (_, i) => `Espacio ${i + 1}`);

  // Generar datos aleatorios
  let data = [];
  for (let i = 0; i < espaciosAcademicos.length; i++) {
    for (let j = 0; j < resultadosAprendizaje.length; j++) {
      const value = Math.floor(Math.random() * 101); // Valor entre 0 y 100
      data.push([j, i, value]);
    }
  }

  // Crear grafico
  const chart = Highcharts.chart('heatmap-container', {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 1
    },
    title: {
      text: 'Mapa de Contribucion de Espacios Academicos a Resultados de Aprendizaje'
    },
    xAxis: {
      categories: resultadosAprendizaje,
      title: { text: 'Resultados de Aprendizaje' }
    },
    yAxis: {
      categories: espaciosAcademicos,
      title: { text: 'Espacios Academicos' },
      reversed: true
    },
    colorAxis: {
      min: 0,
      max: 100,
      stops: [
        [0, '#ffffff'],
        [0.2, '#ffcccc'],
        [0.4, '#ff9999'],
        [0.6, '#ff6666'],
        [0.8, '#ff3333'],
        [1, '#cc0000']
      ]
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 200
    },
    tooltip: {
      formatter: function () {
        return `
          <b>Resultado:</b> ${resultadosAprendizaje[this.point.x]}<br>
          <b>Espacio:</b> ${espaciosAcademicos[this.point.y]}<br>
          <b>Contribucion:</b> ${this.point.value}%
        `;
      }
    },
    series: [{
      name: 'Contribucion',
      borderWidth: 1,
      data,
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]
  });

  // Toggle menu
  const menu = document.getElementById('menu');
  document.getElementById('toggleMenu').addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  // Filtros
  document.querySelectorAll('.filter').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const activeRanges = Array.from(document.querySelectorAll('.filter:checked')).map(cb => [
        parseInt(cb.dataset.min),
        parseInt(cb.dataset.max)
      ]);

      const filteredData = data.filter(([x, y, value]) =>
        activeRanges.some(([min, max]) => value >= min && value <= max)
      );

      chart.series[0].setData(filteredData);
    });
  });

  // Imprimir grafico
  document.getElementById('printChart').addEventListener('click', () => {
    chart.print();
  });
});
