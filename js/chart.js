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
                label: "ST Climatización",
                data: [80, 75, 75, 77, 80, 77, 80],
                backgroundColor: [
                    'rgba(105, 10, 02, .2)',
                ],
                borderColor: [
                    'rgb(119, 136, 153)',
                ],
                borderWidth: 2
            },
            {
                label: "Developer",
                data: [75, 73, 73, 75, 77, 75, 67],
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