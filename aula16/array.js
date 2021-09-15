const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo';
console.log(typeof alunos);
console.log(alunos instanceof Array); // Verifica se um dado é uma instância de array.

alunos.unshift('Luana'); // Adiciona um elemento no começo do Array.
alunos.push('Eduardo'); // Adiciona um elemento final do Array.
alunos[4] = 'Larissa'; //Faz a mesma coisa que a função acima.
alunos[alunos.length] = 'Luana'; //Faz a mesma coisa que a função acima
const removido = alunos.pop(); // Remove o último elemento do Array.
alunos.shift(); // Remove o primeiro elemento do Array.
delete alunos [1]; //Remove o elemento de um Array, mas mantem um indice vazio.

console.log(alunos.slice(0, 3));
console.log(removido);