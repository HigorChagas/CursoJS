/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spead)

// Já vimos
Object.keys (retorna as chaves do objeto)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
const segundoProduto = Object.assign({}, produto);
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
