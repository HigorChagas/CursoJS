// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function (assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}.`
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Higor', 'Chagas', 1.95, 86);
p1.nomeCompleto = 'Norwenna Nascimento das Chagas';
console.log(p1.nomeCompleto);
console.log(p1.imc);
console.log(p1.fala());

/* const p1 = criaPessoa('Higor', 'Chagas', 1.95, 86);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.54, 52);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc()); */

