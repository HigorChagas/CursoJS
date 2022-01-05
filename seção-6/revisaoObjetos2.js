// Factory functions / Constructor functions / Classes -> Os dois são padrões de projetos.

// Isto é uma Factory function
function criaPessoa(nome, sobrenome, idade ) {
    return {
        nome, 
        sobrenome, 
        idade,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa = criaPessoa('Higor', 'Chagas', 25);
//console.log(pessoa.nomeCompleto);

// Isto é uma Constructor function -> A primeira letra da função deve ter letra maiúscula.
function Agente(nome, arma, ultimate) {
    this.nome = nome;
    this.arma = arma;
    this.ultimate = ultimate;
    
    Object.freeze(this);
}

// A palavra 'new' vai criar um objeto vazio. A palavra 'new' atrela a palavra .this ao objeto.
const primeiroAgente = new Agente('Jett', 'Vandal', 'Blade Storm');
console.log(primeiroAgente);