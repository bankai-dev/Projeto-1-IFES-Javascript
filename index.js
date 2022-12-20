const prompt = require("prompt-sync")();

// Leia os três números
var n1 = parseFloat (prompt("Digite o número 1: "));
var n2 = parseFloat (prompt("Digite o número 2: "));
var n3 = parseFloat (prompt("Digite o número 3: "));
// Calcule a soma e a média
var plus = n1 + n2 + n3;   
var media = plus/3;
// Mostre na tela o valor da soma e média
console.log("A soma é: ", plus);
console.log("A média é: ", media);