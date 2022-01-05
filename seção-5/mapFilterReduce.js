// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 15, 22, 27];

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual);

const valoresEmDobro = numeros.map(function(valorAtual, indice, array) {
    return valorAtual * 2;
});

const somarTodos = numeros.reduce(function(acumulador, elementoAtual, indexAtual, arrayOriginal) {
    const resultado = acumulador + elementoAtual;
    return resultado;
}, 0); 

console.log(numerosPares);

