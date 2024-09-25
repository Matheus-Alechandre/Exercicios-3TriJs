function encontrarNumeroEspecifico(matriz, numero) {
    for (let num of matriz) {
        if (num === numero) {
            console.log(`${numero} encontrado!`);
            return;
        }
    }
    console.log(`${numero} não está na matriz.`);
}
