// Datos de prueba
const projects = [
    {
        name: "Proyecto 1",
        factors: [
            {
                name: "Factor 1",
                goals: [
                    {
                        name: "Meta 1",
                        activities: [
                            { name: "Actividad 1", progress: 50 },
                            { name: "Actividad 2", progress: 30 }
                        ]
                    },
                    {
                        name: "Meta 2",
                        activities: [
                            { name: "Actividad 3", progress: 80 },
                            { name: "Actividad 4", progress: 60 }
                        ]
                    }
                ]
            },
            {
                name: "Factor 2",
                goals: [
                    {
                        name: "Meta 3",
                        activities: [
                            { name: "Actividad 5", progress: 40 },
                            { name: "Actividad 6", progress: 20 }
                        ]
                    }
                ]
            }
        ]
    },
    // Otros proyectos con su estructura similar...
];

// Elementos de la interfaz
const projectList = document.getElementById('project-list');
const factorList = document.getElementById('factors');
const goalList = document.getElementById('goals');
const activityList = document.getElementById('activities');
const semaforo = document.getElementById('semaforo');

// Cargar proyectos
projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.onclick = () => loadProject(project);
    projectList.appendChild(li);
});

// Función para cargar un proyecto
function loadProject(project) {
    factorList.innerHTML = '';
    goalList.innerHTML = '';
    activityList.innerHTML = '';
    semaforo.className = ''; // Reset semáforo

    // Cargar factores del proyecto
    project.factors.forEach(factor => {
        const li = document.createElement('li');
        li.textContent = factor.name;
        li.onclick = () => loadFactor(factor, project);
        factorList.appendChild(li);
    });

    // Indicador de progreso del proyecto
    const projectProgress = calculateTotalProgress(project.factors);
    updateSemaforo(projectProgress);
}

// Función para cargar un factor
function loadFactor(factor, project) {
    goalList.innerHTML = '';
    activityList.innerHTML = '';
    semaforo.className = ''; // Reset semáforo

    // Cargar metas asociadas al factor en el proyecto
    factor.goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal.name;
        li.onclick = () => loadGoal(goal);
        goalList.appendChild(li);
    });

    // Indicador de progreso del factor
    const factorProgress = calculateTotalProgress(factor.goals);
    updateSemaforo(factorProgress);
}

// Función para cargar una meta
function loadGoal(goal) {
    activityList.innerHTML = '';

    // Cargar actividades asociadas a la meta
    goal.activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = `${activity.name} - ${activity.progress}%`;
        activityList.appendChild(li);
    });

    // Calcular el progreso total de la meta
    const totalProgress = calculateTotalProgress(goal.activities);
    updateSemaforo(totalProgress);
}

// Función para calcular el progreso total
function calculateTotalProgress(items) {
    let totalProgress = items.reduce((sum, item) => sum + item.progress, 0);
    return totalProgress / items.length;
}

// Función para actualizar el semáforo basado en el progreso
function updateSemaforo(progress) {
    if (progress < 30) {
        semaforo.classList.add('red');
        semaforo.textContent = "Rojo";
    } else if (progress < 70) {
        semaforo.classList.add('yellow');
        semaforo.textContent = "Amarillo";
    } else {
        semaforo.classList.add('green');
        semaforo.textContent = "Verde";
    }
}
