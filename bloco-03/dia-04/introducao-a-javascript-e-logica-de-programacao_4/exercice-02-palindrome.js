// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome("arara") ;
// Retorno esperado: true
// verificaPalindrome("desenvolvimento") ;
// Retorno esperado: false

function verificaPalindrome(palavra){
  auxiliar = palavra.split("").reverse().join("");
  
  if(auxiliar == palavra){
    return console.log(true);
  }else{
    return console.log(false);
  }
}

verificaPalindrome("arara");
