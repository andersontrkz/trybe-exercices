// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrayNumbers = [];
  let result = 0;

  for (let indice in roma) {
    arrayNumbers[indice] = romanos[roma[indice]];
  }

  for (let indice in arrayNumbers) {
    if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
      arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
    } else {
      result += arrayNumbers[indice];
    }
  }

  return result;
}

console.log(Romanos('MMXVIII'));
