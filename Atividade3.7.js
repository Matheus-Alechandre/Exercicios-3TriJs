function encontrarMaiorNumero(array) {
    let maior = array[0];
    array.forEach(num => {
        if (num > maior) maior = num;
    });
    console.log(`Maior número: ${maior}`);
}
