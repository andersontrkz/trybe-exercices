// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


const correctAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'N.A', 'E', 'A'];

const ratingChecker = (correctAnswer, studentAnswer, calculateScore) => {
  return calculateScore(correctAnswer, studentAnswer);
}

const totalScore = (correctAnswer, studentAnswer) => {
  let score = 0;

  for (let index = 1; index <= studentAnswer.length; index += 1) {
    if (studentAnswer[index] == 'N.A') {
      score += 0;
    } else if (correctAnswer[index] === studentAnswer[index]) {
      score += 1;
    } else {
      score -= 0.5;
    }
  }

  return score;
}

console.log(ratingChecker(correctAnswer,studentAnswer,totalScore));
