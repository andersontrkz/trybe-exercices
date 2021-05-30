// Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
// Desafio - 16 + 8 = 214

function add(num1, num2) {
  const arrNum1 = num1.toString().split("").reverse();
  const arrNum2 = num2.toString().split("").reverse();
  let lessArr;
  let bigArr;
  const output = [];

  if (arrNum1.length > arrNum2.length) {
    bigArr = arrNum1;
    lessArr = arrNum2;
  } else {
    bigArr = arrNum2;
    lessArr = arrNum1;
  }

  for (let i = 0; i < bigArr.length; i += 1) {
    if (lessArr[i] !== undefined) {
      output[i] = parseInt(bigArr[i]) + parseInt(lessArr[i]);
    } else {
      output[i] = parseInt(bigArr[i]);
    }
  }

  return parseInt(output.reverse().join(""));
}

console.log(add(16, 18));

//https://www.codewars.com/kata/5effa412233ac3002a9e471d/javascript
