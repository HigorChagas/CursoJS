// Valor por referência

const nomes = ['Higor', 'Maria', 'Joana'];

// const nomes = new Array('Higor', 'Maria', 'Joana')
// String, Objetos, Funções, Números
nomes[2] = 'João';

// Deleta o valor de um array sem alterar o índice.
Math.floor
//Faz uma cópia do array mas não passa valores por referência.
const novo = [...nomes]
console.log(nomes);
nomes.push('Samus')
nomes.unshift('Wallace');
const removido = nomes.pop();
nomes.shift();

delete nomes[2];
console.log(nomes);
console.log(novo, removido);



