let viajeCalc = document.getElementById('viajeCalc');

// Evento submit
viajeCalc.addEventListener('submit', calcularGastos);

function obtenerValores() {
    let destino = document.getElementById('destino').value, 
        presupuesto = document.getElementById('presupuesto').value,
        alojamiento = document.getElementById('alojamiento').value,
        transporte = document.getElementById('transporte').value,
        comida = document.getElementById('comida').value;

    return {destino, presupuesto, alojamiento, transporte, comida}
}

function calcularGastos(e) {
    e.preventDefault();

    const {destino, presupuesto, alojamiento, transporte, comida} = obtenerValores();

    let gastos = parseInt(alojamiento) + parseInt(transporte) + parseInt(comida);
    let balance = presupuesto - gastos;

    mostrarResultado(destino, presupuesto, balance);
}

function mostrarResultado(destino, presupuesto , balance) {
    let resultado = document.getElementById('resultado');
    let datos = document.createElement('div');

    datos.innerHTML = `
        <div class="container-datos row">
            <div class="col s4">
                <h6>Tu destino: ${destino}</h6>
            </div>
            <div class="col s4">
                <h6>Tu presupuesto: ${presupuesto}</h6>
            </div>
            <div class="col s4">
                <h6>Tus gastos: ${balance}</h6>
            </div>
        </div>
    `
    resultado.appendChild(datos)

    resetear();
}

function resetear(){
    document.getElementById('viajeCalc').reset()
}