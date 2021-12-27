const relogio = document.querySelector('#clock');
let seconds = 0;
let timer;

function getTimeFromSecods(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function startClock() {
    timer = setInterval(() => {
        seconds++;
        relogio.innerHTML = getTimeFromSecods(seconds);
    }, 1000);
}
function clock() {
    document.addEventListener('click', e => {
        
        const elemento = e.target;
        console.log(elemento);
    
        if(elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            startClock();
            relogio.classList.remove('clock-red');
        }

        if(elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('clock-red');
        }

        if(elemento.classList.contains('zerar')) {
            relogio.classList.remove('clock-red');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
    });
}

clock();

