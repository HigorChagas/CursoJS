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
const caneca = Object.assign({}, produto, { material: 'porcelana'});

produto.nome = 'Xícara';
caneca.preco = 5.4
console.log(produto);
console.log(caneca);