//a argumentos que sustena todos os argumentos enviados.
// arguments não funcionam para arrow functions.
function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);