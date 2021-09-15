const numero = Number(prompt('Digite um número: '));
const numeroDigitado = document.getElementById('numero-titulo');
const resultado = document.getElementById('resultado');
        numeroDigitado.innerHTML = numero;
        resultado.innerHTML += `Raiz quadrada: ${numero ** 0.5}<br />`;
        resultado.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}<br />`;
        resultado.innerHTML += `É NaN? ${Number.isNaN(numero)}<br />`;
        resultado.innerHTML += `Arredondando para baixo ${Math.floor(numero)}<br />`;
        resultado.innerHTML += `Arredondando para cima ${Math.ceil(numero)}<br />`;
        resultado.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;