function exibe() {
    const matriz = [
        [1, 2, 3], 
        [4, 5, 6], 
        [9, 8, 9]
    ];
    const matrizInvertida = matriz.slice(0).reverse();

    const produtoDiagonal = matriz => {
        let produto = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if(i === j) {
                    produto += matriz[i][j];
                }
            }
        }
        return produto;
    }

    const produtoDiagonalInvertida = matrizInvertida => {
        let produto = 0;
        for (let i = 0; i < matrizInvertida.length; i++) {
            for (let j = 0; j < matrizInvertida[i].length; j++) {
                if(i === j) {
                    produto += matrizInvertida[i][j];
                }
            }
        }
        return produto;
    }
    console.log(produtoDiagonal(matriz));
    console.log(produtoDiagonalInvertida(matrizInvertida));
    console.log(produtoDiagonalInvertida(matrizInvertida) - produtoDiagonal(matriz));
}

exibe();