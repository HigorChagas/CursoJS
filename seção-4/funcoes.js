// Declaração de função. (FUnction hoisting).
// - hoisting: A engine do JS vai elevar as declarações de funções para o topo do arquivo JS(Não importa onde você chamado a função).
function falaOi() {
    console.log('Oie');
}

falaOi();

// Funções são First-class Objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função.');
    funcao();
} 
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando.');
    }

};
obj.falar();