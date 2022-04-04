function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(false);
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

espera('Frase 1', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Frase 2', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera(23, aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
       console.log('Processo concluído'); 
    })
    .catch(e => {
        console.log('ERRO: ', e);
    })

