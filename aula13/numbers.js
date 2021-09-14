let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // num1 = num1 + num2
num1 = parseFloat(num1.toFixed(2));
num1 = ((num1 * 100) + (num2 * 100)) / 100; // Formula para fazer contas com números com pontos flutuantes

console.log(num1);

console.log(num1.toString()  + num2); // Converte um number em uma string
console.log(typeof num1); // Mostra o tipo de dado primitivo
console.log(num1.toString(2)); // Mostra a forma binária do number.
console.log(num2.toFixed(2));
console.log(Number.isInteger(num1)); // Verifica se um número é inteiro
console.log(Number.isNaN()); // Verifica se a variável é NaN

