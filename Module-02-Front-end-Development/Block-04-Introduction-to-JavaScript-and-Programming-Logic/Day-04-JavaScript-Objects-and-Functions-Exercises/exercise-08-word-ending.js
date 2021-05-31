// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be") ;
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan") ;
// Retorno esperado: false

//Duas formas de resolver o exercício
function verificaFimPalavraA(palavra, fimPalavra) {
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");
  controle = true;
  for (let i = 0; i < fimPalavra.length; i++) {
    if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
      controle = false;
    }
  }
  return controle;
}

//_________________________________________________________________________

function verificaFimPalavraB(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");

  for (let i = 0; i < inversoFimPalavra.length; i += 1) {
    if (inversoPalavra[i] != inversoFimPalavra[i]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verificaFimPalavraA("trybe", "be")); //true
console.log(verificaFimPalavraB("joaofernando", "juca")); //false
