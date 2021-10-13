// return
// Retorna um valor
// Termina a função

/* function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a, b);
}

soma2(5, 2);

document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'cyan';
}); */

function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome };
}

const p1 = criaPessoa('Higor', 'Chagas');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

function criaMultiplicador(multiplicador) {
    return function multiplicacao(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);