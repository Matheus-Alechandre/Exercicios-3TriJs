function somaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][matriz.length - 1 - i];
    }
    return soma;
}