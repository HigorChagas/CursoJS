const pessoa = {
    nome: 'Higor',
    sobrenome: 'Chagas',
    idade: 25,
    endereco: {
        rua: 'Av Norberto Mayer',
        numero: 196
    }
};

// Atribuição via desestruturação
const { endereco: { rua, numero }, endereco } = pessoa
console.log(rua, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(resto);