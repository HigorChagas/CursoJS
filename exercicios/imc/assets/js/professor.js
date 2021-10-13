const form = document.querySelector('#formulario');

//Função criada para bloquear o submit do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Verifica se a altura e o peso digitados são válidos.
    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    //Constantes que recebem como argumentos o peso a altura e o imc.
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    //Mostra a mensagem com o IMC 
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    
    setResultado(msg, true);
});

//Função que verifica na tabela qual a classificação do IMC.
function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade Grau 1',
        'Obesidade Grau 2',
        'Obesidade Grau 3'
    ];

    if(imc >= 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    
    if(imc >= 29.9) return nivel[3];
    
    if(imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0]; 
}

//Função que recebe o peso e a altura digitadas e calcula o IMC.
function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

//Função para criar um parágrafo dentro da DIV.
function criaP() {
    const p = document.createElement('p');
    return p;
}

//Função criada apenas para adicionar uma mensagem no HTML
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

