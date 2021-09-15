let num1 = 9;
let num2 = Math.floor(num1); // Arredonda o número para baixo.
let num3 = Math.ceil(num1); // Arredonda o número para cima.
let num4 = Math.round(num1); // Arredonda para o número inteiro mais próximo.

console.log(Math.max(1, 2, 3, 4, 5, -4, 123, -543, 234, 150, )); //Retorna o maior número da sequência.
console.log(Math.min(1, 2, 4, 5)); // Retorna o menor número da sequência.
console.log(Math.random()); // Retorna um número aleatório 

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);
console.log(Math.PI);
console.log(100 / 0); // OBS: CUIDADO COM DIVISÕES COM ZERO. JAVASCRIPT RETORNA TRUE E NÃO DA ERRO NA CONTA.

