function verificarPrimos(numeros) {
    for (let numero of numeros) {
        if (numero < 2) {
            console.log(`${numero} não é primo.`);
            continue;
        }
        let isPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                console.log(`${numero} não é primo.`);
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            console.log(`${numero} é primo.`);
        }
    }
}