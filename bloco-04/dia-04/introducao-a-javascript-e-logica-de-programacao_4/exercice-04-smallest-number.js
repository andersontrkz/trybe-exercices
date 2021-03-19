// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array=[2, 3, 6, 7, 10, 1];
let arrayMenor = [2, 4, 6, 7, 10, 0, -3];
let menor = 0;
let posicao2 = 999;

for (let key in arrayMenor){
  if(arrayMenor[key] < menor){
    menor = array[key];
    posicao2 = key;
  }
}
console.log("O índice de menor valor é o: " + posicao2);
