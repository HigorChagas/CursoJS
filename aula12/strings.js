// 
let umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString[4]); // Mostra a letra do indice digitado
console.log(umaString.charAt(6));
console.log(umaString.indexOf('Um', 3)); 
console.log(umaString.lastIndexOf('o'));
console.log(umaString.match(/[a-z]/g)); // Template string
console.log(umaString.search(/x/)); // Template string
console.log(umaString.replace(/r/g, '#')); // Template string
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());