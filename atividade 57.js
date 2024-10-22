function multiplicarMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matrizB.length; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = soma;
        }
    }
    return resultado;
}
