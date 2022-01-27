//Getter -> Obter o valor // Setter -> Setar o valor
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        configurable: true, // O valor é configurável?
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('[Error]');
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor
        }
    };
}

// const p1 = new Produto('Tênis', 250, 32);

// p1.estoque = '500';
// console.log(p1.estoque);

const p2 = criaProduto('Bermuda');
p2.nome = 'Qualquer coisa'
console.log(p2.nome);