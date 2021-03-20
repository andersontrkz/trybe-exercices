// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15

function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index++) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5)); 
