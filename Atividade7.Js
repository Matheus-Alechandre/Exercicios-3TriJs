function verificarPalindromo(str) {
    let strInvertida = str.split('').reverse().join('');
    return str === strInvertida;
}

console.log(verificarPalindromo("arara")); 
