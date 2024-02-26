let ultimoValor = 0;
let startTo = 0
let resultado = 0
let contagem = document.getElementById("contagem")

function somar() {
    let numero = parseFloat(document.getElementById('numero').value);

    resultado = ultimoValor + numero;

    startTo = resultado - numero + 1

    ultimoValor = resultado;

    for (let i = startTo; i <= resultado; i++) {
        const p = document.createElement("p");
        p.innerText = `Podemon de numero #${i};`
        contagem.appendChild(p);

        console.log(i);
    }
    const br = document.createElement("br");
    contagem.appendChild(br);

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;

}