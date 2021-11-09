function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

function tabuada(max) {
    const numero = 2;
    if (max >= 10) return;
    max ++;

    const resultado = max * numero;
    
    console.log(resultado);
    tabuada(max)
}

tabuada(-2);