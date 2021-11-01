function Calculadora(display) {
    //Atributos ou métodos privados
    display = document.querySelector('.display');

    this.iniciar = () => {
        this.cliqueBotoes();
        this.btnParaDisplay();
        this.clearDisplay();
    }

    this.apagaUm = () => display.value = display.value.slice(0, -1);
    this.btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus();
    }

    this.clearDisplay = () => display.value = '';

    this.capturaEnter = () => {
        display.addEventListener('keypress', event => {
            if (event.key === 'Enter') {
                this.realizaConta();
            }
        });
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;

            if(elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }

            if(elemento.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(elemento.classList.contains('btn-del')) {
                this.apagaUm();
            }
            if(elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    }

    this.realizaConta = () => {
        let conta = display.value;
        console.log(conta);
        
 
        try {
            conta = eval(conta);
            
            if(!conta) {
                alert('Conta inválida!');
                return
            }
            display.value = conta;
        } catch (error) {
             alert('Conta inválida!');
             return
        }
     }

    //Atributos ou métodos públicos
   
}

const calculadora = new Calculadora();
calculadora.iniciar();
