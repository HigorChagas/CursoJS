// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
const numerosPares = numeros.filter(function(valor) {
    if(valor % 2 !== 0) return valor;
})
console.log(numerosPares);











// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A
const pessoas = [
    { nome: 'Higor', idade: 25 },
    { nome: 'Ana', idade: 21 },
    { nome: 'Skie', idade: 12 },
    { nome: 'Letícia', idade: 82 },
    { nome: 'Rosana', idade: 58 },
    { nome: 'Wallace', idade: 68 },
];

//
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaioresDeCinquenta = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});