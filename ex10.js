function verificarPalindromo(palavra) {
    const normalizada = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalizada === normalizada.split('').reverse().join('');
}
console.log(verificarPalindromo("arara")); // true
console.log(verificarPalindromo("Olá")); // false