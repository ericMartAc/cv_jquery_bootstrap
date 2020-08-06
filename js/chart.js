//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Filosofía del riesgo", "Manejo de herramientas", "Comunicación y relación",
         "Auto aprendizaje", "capacidad resolutiva", "Trabajo en equipo", "Objetividad"],
        datasets: [{
                label: "",
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(0, 0, 0, .0)',
                ],
                borderColor: [
                    'rgba(0, 0, 0, .0)',
                ],
                borderWidth: 2
            },
            {
                label: "Skills",
                data: [70, 65, 70, 75, 80, 70, 67],
                backgroundColor: [
                    'rgba(05, 10, 202, .2)',
                ],
                borderColor: [
                    'rgb(319, 136, 153)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});