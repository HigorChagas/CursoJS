/* function criaCalculadora() {
    
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            console.log(eval(conta));

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida');
                return
            }   
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
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
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

function Calculadora(display) {
    //Atributos ou métodos privados
    display = document.querySelector('.display');


    //Atributos ou métodos públicos
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

    this.clearDisplay = () => {
        display.value = '';
    }

    this.iniciar = () => {
        this.cliqueBotoes();
        this.btnParaDisplay();
        this.clearDisplay();
       // this.realizaConta();
    }

    this.btnParaDisplay = (valor) => {
        display.value += valor;
    }

    this.apagaUm = () => {
        display.value = display.value.slice(0, -1);
    }
}

const calculadora = new Calculadora();
calculadora.iniciar();
