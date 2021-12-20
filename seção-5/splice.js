const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice atual, delete, elemento1, elemento2, elemento3);
// função pop();
const removidos = nomes.splice(-1, 1);

// shift()
const remover = nomes.splice(0, 1);

// push()
nomes.splice(nomes.length, 0, 'Higor');

// unshift()
nomes.splice(0, 0, 'Higor', 'Chagas');

console.log(nomes, removidos, remover);
console.log(Number.MAX_VALUE);