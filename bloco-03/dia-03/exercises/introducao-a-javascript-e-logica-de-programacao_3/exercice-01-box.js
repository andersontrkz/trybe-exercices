//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

//n = 5
// *****
// *****
// *****
// *****
// *****

let value = 5;
let text = "";

for(let index = 0; index < value; index++){
  text = text + "*";
}

for(let index = 0; index < value; index++){
  console.log(text);
}
