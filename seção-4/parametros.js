//a argumentos que sustena todos os argumentos enviados.
// arguments não funcionam para arrow functions.
/* function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

/* function funcao( {nome, sobrenome, idade} ) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Higor', sobrenome: 'Chagas', idade: 25};
funcao(obj); */

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};


conta('*', 1, 20, 30, 40, 50);