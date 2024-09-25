function verificarTodosPositivos(matriz) {
    for (let num of matriz) {
        if (num < 0) {
            console.log("Há um número negativo.");
            return;
        }
    }
    console.log("Todos os números são positivos.");
}
