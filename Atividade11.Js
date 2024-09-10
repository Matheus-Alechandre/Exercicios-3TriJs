function contarVogais(str) {
    let vogais = 'aeiou';
    let contador = 0;

    for (let char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("Hello World"));