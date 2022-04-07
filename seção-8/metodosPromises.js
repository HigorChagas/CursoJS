function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + max);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(new Error('Falha'));
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return espera('Baixei a página', 3000);
    }
}

baixaPagina()
    .then( dadosPagina => console.log(dadosPagina))
    .catch( error => console.log('ERRO', error));

// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     espera('Promise 1', rand(1, 5)),
//     espera('Promise 2', rand(1, 5)),
//     espera('3000', rand(1, 5))
// ];

// Promise.race(promises)
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });