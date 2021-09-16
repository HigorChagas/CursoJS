/* 
    Primitivos (imutáveis) - string, number, boolean, undefined, 
    null (bigint, symbol) - valores copiados.

    Referência (mutável) - array, object, function - Passados por referência.
*/

let a = [1, 2, 3, 4];
let b = [...a]; //Spread.
0
console.log(b); 