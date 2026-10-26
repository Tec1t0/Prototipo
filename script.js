// --- NAVEGACIÓN ---
const botonDashboard = document.getElementById("boton-dashboard");
const botonInventario = document.getElementById("boton-inventario");
const seccionDashboard = document.getElementById("dashboard");
const seccionInventario = document.getElementById("inventario");

botonInventario.addEventListener("click", function () {
    seccionDashboard.hidden = true;
    seccionInventario.hidden = false;
    botonDashboard.classList.remove("activo");
    botonInventario.classList.add("activo");
});

botonDashboard.addEventListener("click", function () {
    seccionInventario.hidden = true;
    seccionDashboard.hidden = false;
    botonInventario.classList.remove("activo");
    botonDashboard.classList.add("activo");
});

// --- LÓGICA DE BOTONES ---
const boton = document.querySelector("#boton-espresso");
const detalle = document.querySelector("#detalle-espresso");

boton.addEventListener("click", function () {
    detalle.textContent = "El espresso es uno de nuestros cafés.";
});

// --- LECTOR QR ---
function onScanSuccess(decodedText, decodedResult) {
    console.log(`Código escaneado: ${decodedText}`, decodedResult);
    document.getElementById('resultado').innerText = "Código escaneado: " + decodedText;
}

function onScanFailure(error) {
    // Los errores de escaneo continuo son normales, se pueden ignorar en la UI
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);


// --- GRÁFICOS (Chart.js) ---
const graficos = document.querySelector("#grafico-ingreso");
new Chart(graficos, {
    type: "bar",
    data: {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        datasets: [{
            label: "Ingresos ($CLP)",
            data: [45000, 65000, 38000, 71000, 90000],
            backgroundColor: "#ce7646"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const egresos = document.querySelector("#grafico-egresos");
new Chart(egresos, {
    type: "line",
    data: {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        datasets: [{
            label: "Egresos ($CLP)",
            data: [1000, 20000, 31000, 50000, 900],
            borderColor: "#e48989",
            backgroundColor: "#b37e62",
            borderWidth: 4,
            pointRadius: 4,
            tension: 0.2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const comparacion = document.querySelector("#grafico-comparacion");
new Chart(comparacion, {
    type: "bar",
    data: {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        datasets: [
            {
                label: "Ingresos ($CLP)",
                data: [45000, 65000, 38000, 71000, 90000],
                borderColor: "#ebf0eb",
                backgroundColor: "#17eb56",
                borderWidth: 4,
                pointRadius: 4,
                tension: 0.2
            },
            {
                label: "Egresos ($CLP)",
                data: [1000, 20000, 31000, 50000, 900],
                borderColor: "#f7f1f1",
                backgroundColor: "#f31111",
                borderWidth: 4,
                pointRadius: 4,
                tension: 0.2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});