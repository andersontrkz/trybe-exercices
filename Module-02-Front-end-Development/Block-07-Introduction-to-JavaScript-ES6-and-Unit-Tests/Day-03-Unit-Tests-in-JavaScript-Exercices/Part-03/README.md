Reescrevendo funções utilizando TDD - Parte 3
Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
Copiar
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
Copiar
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
Copiar
const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
Copiar
function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x + y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];