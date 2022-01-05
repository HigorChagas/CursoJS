const pessoa = {
    nome: 'Higor',
    sobrenome: 'Chagas',
    idade: 25
};

const pessoa2 = new Object()
pessoa2.nome = 'Alice';
pessoa2.sobrenome = 'Wonderland';
pessoa2.idade = 25;
pessoa2.falarNome = function() {
    return(`${this.nome} está falando seu nome.`);
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa2) {
    console.log(chave);
}