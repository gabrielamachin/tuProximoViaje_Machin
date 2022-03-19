let viajeCalc = document.getElementById('viajeCalc');

viajeCalc.addEventListener('submit', calcularGastos);

function calcularGastos(e) {
    e.preventDefault();
    
    let destino = document.getElementById('destino').value, 
        presupuesto = document.getElementById('presupuesto').value,
        alojamiento = document.getElementById('alojamiento').value,
        transporte = document.getElementById('transporte').value,
        comida = document.getElementById('comida').value;

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
                <h6>${destino}</h6>
            </div>
            <div class="col s4">
                <h6>${presupuesto}</h6>
            </div>
            <div class="col s4">
                <h6>${balance}</h6>
            </div>
        </div>
    `
    resultado.appendChild(datos)

    resetear();
}

function resetear(){
    document.getElementById('viajeCalc').reset()
}