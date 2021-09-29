const pessoa = {
    nome: 'Higor',
    sobrenome: 'Chagas',
    idade: 25
};

//console.log(pessoa.nome);
//console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}