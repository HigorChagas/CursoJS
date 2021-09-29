const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros) {

    if(numero === 2) {
        continue; // Pula para a próxima interação do código.
    }

    if(numero === 7) {
        break; // Ao encontrar o valor, o laço é finalizado.
    }

    console.log(numero);
}