function calcularFatorial(n) {
    if (n < 0) return "Fatorial não definido para números negativos.";
    if (n === 0) return 1;
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log(calcularFatorial(5)); // 120