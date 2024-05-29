var etanol;
var gasolina;

function calcular() {
    etanol= parseFloat(formulario.etanol.value);
    gasolina= parseFloat(formulario.gasolina.value);

    if (etanol < 0.70 * gasolina) {
        document.getElementById('status').src="./imgs/etanol.png";
    } else {
        document.getElementById('status').src="./imgs/gasolina.png";
    }
}

function limpar() {
    document.getElementById('status').src="./imgs/neutro.png";
}