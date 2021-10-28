// IFFE -> Immediately invoked function expression.

(function(idade, peso, altura) { 
    const sobrenome = 'Chagas';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Higor'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(25, 85, 1.95);