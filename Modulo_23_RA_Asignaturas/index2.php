<?php
$data = [
    [
        "subject" => "Cátedra de Contexto",
        "results" => [
            [
                "learningOutcome" => "RA19",
                "description" => "Analiza el contexto social considerando elementos de responsabilidad social...",
                "relation" => "Muy alta",
                "percentage" => 20,
                "justification" => "La Cátedra de Contexto tiene una relación directa con la comprensión del impacto social y la responsabilidad ética en la práctica de la ingeniería telemática."
            ],
            [
                "learningOutcome" => "RA16",
                "description" => "Ejecuta sus actuaciones con responsabilidad ética y profesional en el ámbito de la ingeniería telemática.",
                "relation" => "Muy alta",
                "percentage" => 18,
                "justification" => "La materia fomenta una comprensión ética y profesional en el ámbito de la ingeniería, clave para la toma de decisiones responsables en proyectos."
            ]
            // Agrega más resultados si es necesario
        ]
    ]
    // Agrega más asignaturas aquí
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asignaturas y Resultados</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Resultados de Aprendizaje por Asignatura</h1>
  </header>
  <main>
    <div id="table-container">
      <input type="text" id="searchInput" placeholder="Buscar en la tabla..." onkeyup="filterTable()">
      <?php foreach ($data as $subject): ?>
        <h2><?php echo htmlspecialchars($subject['subject']); ?></h2>
        <table class="sortable">
          <thead>
            <tr>
              <th onclick="sortTable(0)">Resultado de Aprendizaje</th>
              <th onclick="sortTable(1)">Descripción</th>
              <th onclick="sortTable(2)">Relación</th>
              <th onclick="sortTable(3)">Porcentaje (%)</th>
              <th onclick="sortTable(4)">Justificación</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($subject['results'] as $result): ?>
              <tr>
                <td><?php echo htmlspecialchars($result['learningOutcome']); ?></td>
                <td><?php echo htmlspecialchars($result['description']); ?></td>
                <td><?php echo htmlspecialchars($result['relation']); ?></td>
                <td><?php echo htmlspecialchars($result['percentage']); ?></td>
                <td><?php echo htmlspecialchars($result['justification']); ?></td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      <?php endforeach; ?>
    </div>
  </main>
  <script src="script.js"></script>
</body>
</html>
