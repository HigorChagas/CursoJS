/**
 * Operadores aritiméticos
 * + Adição / Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
*/

/* 
Ordem de precedencia.
 - ()
 - ** 
 - * / %
 - + -
*/

/* 
    Incremento = ++
    Decremento = --

    Operadores de atribuição
*/

const passo = 2;
let contador = 0;
contador += passo; // contador = contador + passo
contador += passo; 
contador += passo;
console.log(contador);

// NaN - Not a number, parseInt(inteiro), parseFloat(decimais)
const num1 = 10;
const num2 = Number('5.2');
console.log(num1 + num2);