function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + max);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Erro!');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });
}

// espera('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return espera('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return espera('Fase', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .then(fase => {
//         console.log('Terminamos na fase: ' + fase);
//     })
//     .catch(error => console.log(error) );

async function executa() {
    try {
        const fase1 = espera('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);
    
        const fase2 = await espera('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await espera(1, rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();

// pending -> pendente
// fulfilled -> resolvida
// rejected -> rejeitada

const teste2 = espera('Olá', 2000);
console.log(teste2);