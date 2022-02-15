function Produto(nome, preco,) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 100);
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'L'
    },
    cor: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Blue'
    },
});

p3.aumento(50);
console.log(p3);