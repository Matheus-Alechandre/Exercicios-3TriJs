function somaLinhasMatriz(matriz) {
    let somaLinhas = [];
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        somaLinhas.push(soma);
    }
    return somaLinhas;
}