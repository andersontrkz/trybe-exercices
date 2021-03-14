// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo

let a = 5;
let b = 20;

function sum (a, b) {
  return ('Soma: ' + (a + b));
}

function subtraction (a, b) {
  return ('Subtração: ' + (a - b));
}

function multiplication (a, b) {
  return ('Multiplicação: ' + a * b);
}

function division (a, b) {
  return ('Divisão: ' + a / b);
}

function module (a, b) {
  return ('Módulo: ' + a % b);
}

console.log(sum(a, b));
console.log(subtraction(a, b));
console.log(division(a, b));
console.log(multiplication(a, b));
console.log(module(a, b));