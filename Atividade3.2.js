function contarPares(array) {
    let contagem = 0;
    array.forEach(num => {
        if (num % 2 === 0) contagem++;
    });
    console.log(contagem > 0 ? `Total de números pares: ${contagem}` : "Não há números pares.");
}
