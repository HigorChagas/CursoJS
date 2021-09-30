try {
    // É executada quando não há erros.
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch(e) {
    // É executada quando há erros.
    console.log('Tratando o erro');
} finally {
    // Executa sempre.
    console.log('Eu sempre sou executado');
}

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(error) {
    
} finally {
    console.log('Tenha um bom dia!');
}

