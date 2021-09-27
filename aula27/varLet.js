const verdadeira = true;

// let tem escopo de bloco { ...bloco }
// Var só tem escopo de função

let nome = 'Higor'; // Criando
var nome2 = 'Higor';

var nome2 = 'Chagas'; // Redeclarada
if (verdadeira) {
    let nome = 'Chagas'; //Criando
    var nome2 = 'Rogério';

    if(verdadeira) {
        var nome2 = 'Ronaldo';
        let nome = 'Outra coisa';
    }
}
console.log(nome, nome2);

var sobrenome = 'Chagas';
function falaOi() {
    var nome = 'Higor'
    console.log(sobrenome);
}

falaOi();

console.log(sobrenome);

var sobrenome = 'Higor';

