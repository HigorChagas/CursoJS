// For clássico - Geralmente com iteráveis (Como arrays ou strings)
// For in - Retorna o indice ou chave (string, arrays ou ojetos)
// For of - Retorna o valor em si. (iteráveis, arrays ou strings)


const nomes = ['Higor', 'Maria', 'João'];
const pessoa = {
    nome: 'Higor',
    sobrenome: 'Chagas'
}

//Para objetos
for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

for(let valor of pessoa) {

}

for (let index in nomes) {
    console.log(nomes[index]);
}

for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});