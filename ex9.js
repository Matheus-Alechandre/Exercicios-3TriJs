function calcularMedia(array) {
    if (array.length === 0) return 0;
    return array.reduce((a, b) => a + b) / array.length;
}
console.log(calcularMedia([1, 2, 3, 4, 5])); // 3
