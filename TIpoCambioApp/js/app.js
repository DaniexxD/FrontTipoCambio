let btnCambiar = document.querySelector(".btnCambiar");
let txtValor = document.querySelector(".txtValor");
let cajaValor = document.querySelector(".valor");


let valor;

async function getCalculo(monto, origen, destino) {
  const response = await fetch(`https://localhost:44358/api/TipoCambios/${monto}/${origen}/${destino}`);
  valor = await response.json();
  showCaja()
  txtValor.value = valor.toFixed(2);
  if (txtValor.value == 0 ) {
    throw new Error('Tipo de cambio no existe')
  }
}


btnCambiar.addEventListener('click', () => {
  let monto = document.querySelector('.txtMonto').value;
  let monedaOrigen = document.querySelector('.monedaOrigen').value;
  let monedaDestino = document.querySelector('.monedaDestino').value;
  getCalculo(monto, monedaOrigen, monedaDestino).then( a => a);
})

function showCaja() {
  cajaValor.style.display = 'block';
  txtValor.disabled = true;
}


