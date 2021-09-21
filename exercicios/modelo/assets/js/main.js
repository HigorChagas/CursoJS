function calcular() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function pararRefresh(evento) {
        evento.preventDefault();

        const peso = Number(form.querySelector('#input-peso').value);
        const altura = Number(form.querySelector('#input-altura').value);
        const corDeFundo = resultado.style.backgroundColor = 'rgb(56, 145, 246)';

        if (peso === 0 || altura === 0) {
            resultado.innerHTML = 'Peso ou altura inválido';
            corDeFundo;
        } else {

            formulaImc = peso / (altura * altura);

            abaixoPeso = formulaImc < 18.5;
            pesoNormal =  formulaImc >= 18.5 && formulaImc <= 24.9;
            sobrepeso = formulaImc >= 25 && formulaImc <= 29.9;
            ObesidadeGrauI = formulaImc >= 30 && formulaImc <= 34.9;
            ObesidadeGrauII = formulaImc >= 35 && formulaImc <= 39.9;
            ObesidadeGrauIII = formulaImc >= 40;

            if(abaixoPeso) {
                resultado.innerHTML = `O seu IMC é: ${formulaImc.toFixed(2)} (abaixo do peso)`;
                corDeFundo;
            } else if (pesoNormal) {
                resultado.innerHTML = `O seu IMC é: ${formulaImc.toFixed(2)} (peso normal)`;
                corDeFundo;
            } else if (sobrepeso) {
                resultado.innerHTML = `O seu IMC é: ${formulaImc.toFixed(2)} (sobrepeso)`;
                corDeFundo;
            } else if (ObesidadeGrauI) {
                resultado.innerHTML = `O seu IMC é: ${formulaImc.toFixed(2)} (Obesidade Grau I)`;
                corDeFundo;
            } else if (ObesidadeGrauII) {
                resultado.innerHTML = `O seu IMC é: ${formulaImc.toFixed(2)} (Obesidade Grau II)`;
                corDeFundo;
            } else if (ObesidadeGrauIII) {
                resultado.innerHTML = `O seu IMC é: ${formulaImc.toFixed(2)} (Obesidade Grau III)`;
                corDeFundo;
            }
        }
    };
    form.addEventListener('submit', pararRefresh);
}


calcular();