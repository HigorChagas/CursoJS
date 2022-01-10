// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor da chave
        writable: false, // Pode alterar o valor?
        configurable: false // Pode apagar, editar ou reconfigurar a chave?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const produtoUm = new Produto('Calça', 100, 5);
console.log(produtoUm);

for(let chave in produtoUm) {
    console.log(chave);
}