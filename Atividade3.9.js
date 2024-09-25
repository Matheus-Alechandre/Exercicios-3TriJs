function somaImpares(array) {
    let soma = 0;
    array.forEach(num => {
        if (num % 2 !== 0) soma += num;
    });
    console.log(`Soma dos números ímpares: ${soma}`);
}
