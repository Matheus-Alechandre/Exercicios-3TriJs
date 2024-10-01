let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let palpite;
while (palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
    if (palpite === numeroAleatorio) {
        console.log("Você acertou!");
    } else {
        console.log("Tente novamente.");
    }
}