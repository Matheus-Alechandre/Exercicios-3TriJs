function procurarPrimeiroNegativo(lista) {
    for (let num of lista) {
        if (num < 0) {
            console.log(`Primeiro número negativo: ${num}`);
            return;
        }
    }
    console.log("Não há números negativos na lista.");
}
