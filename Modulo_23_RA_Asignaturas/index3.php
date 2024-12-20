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
                "justification" => "Relación directa con la comprensión del impacto social y la responsabilidad ética."
            ],
            [
                "learningOutcome" => "RA16",
                "description" => "Ejecuta sus actuaciones con responsabilidad ética y profesional en el ámbito de la ingeniería telemática.",
                "relation" => "Muy alta",
                "percentage" => 18,
                "justification" => "Fomenta una comprensión ética y profesional en el ámbito de la ingeniería."
            ]
        ]
    ],
    [
        "subject" => "Cálculo Diferencial",
        "results" => [
            [
                "learningOutcome" => "RA20",
                "description" => "Aplica herramientas matemáticas avanzadas para resolver problemas de ingeniería.",
                "relation" => "Alta",
                "percentage" => 25,
                "justification" => "El cálculo diferencial proporciona una base sólida para la resolución de problemas matemáticos."
            ]
        ]
    ]
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
        <h1>Asignaturas y Resultados de Aprendizaje</h1>
    </header>
    <main>
        <div id="tabs-container">
            <!-- Botones de pestañas -->
            <div class="tabs">
                <?php foreach ($data as $index => $subject): ?>
                    <button class="tab-button" onclick="showTab(<?php echo $index; ?>)">
                        <?php echo htmlspecialchars($subject['subject']); ?>
                    </button>
                <?php endforeach; ?>
            </div>
            <!-- Contenido de pestañas -->
            <?php foreach ($data as $index => $subject): ?>
                <div class="tab-content" id="tab-<?php echo $index; ?>" style="display: <?php echo $index === 0 ? 'block' : 'none'; ?>;">
                    <h2><?php echo htmlspecialchars($subject['subject']); ?></h2>
                    <input type="text" class="localSearchInput" placeholder="Buscar en esta tabla..." onkeyup="filterTable(this)">
                    <table class="sortable">
                        <thead>
                            <tr>
                                <th onclick="sortTable(this, 0)">Resultado de Aprendizaje</th>
                                <th onclick="sortTable(this, 1)">Descripción</th>
                                <th onclick="sortTable(this, 2)">Relación</th>
                                <th onclick="sortTable(this, 3)">Porcentaje (%)</th>
                                <th onclick="sortTable(this, 4)">Justificación</th>
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
                </div>
            <?php endforeach; ?>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
