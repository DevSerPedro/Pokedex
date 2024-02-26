// let ultimoValor = 0;
// let contagem = document.getElementById("contagem")

// function somar() {

//     let numero = parseFloat(document.getElementById('numero').value);

//     // Soma o número ao último valor
//     let resultado = ultimoValor + numero;
//     let irAte = resultado - numero

//     ultimoValor = resultado;


//     for (let i = irAte; i < resultado; i++) {
//         const p = document.createElement("p");
//         p.innerText = i;
//         contagem.appendChild(p);

//         console.log(i);
//     }
//     const br = document.createElement("br");
//     contagem.appendChild(br);

//     document.getElementById('resultado').textContent = 'Resultado: ' + resultado;

// }


let ultimoValor = 0;
let startTo = 0
let resultado = 0
let contagem = document.getElementById("contagem")

function somar() {
    let numero = parseFloat(document.getElementById('numero').value);

    if (numero == 0 && ultimoValor == 0) {
        somar2()
        somar2()
    }

    somar2()
    function somar2() {
        resultado = ultimoValor + numero;


        if (startTo < 1) {
            startTo = resultado - numero + 1
        } else {
            startTo = resultado - numero
        }

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

}