// Função construtora -> Objetos
// Função fábrica - Objetos
// Construtora -> Pessoa (new)

//OBS: é obrigatório o uso da palavra (new) para usar uma função construtora.

function Pessoa(nome, sobrenome) {
    //Atributos ou Métodos privados.
    const ID = 123456;

    const metodoInterno = () => {

    };

    // Atributos ou Métodos públicos.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Higor', 'Chagas');
const p2 = new Pessoa('Alice', 'Chagas');
p1.metodo();
console.log()
