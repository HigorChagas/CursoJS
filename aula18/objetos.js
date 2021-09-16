const pessoa = {
    nome: 'Higor',
    sobrenome: 'Chagas',
    idade: '25',

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
        console.log(`A minha idade atual e ${this.idade}`);
    }
};

// Função factory
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoaUm = criaPessoa('Higor', 'Chagas', 25);
console.log(pessoaUm.nome);

pessoa.fala();
pessoa.incrementaIdade();