// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallest = 999;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < smallest) {
    smallest = numbers[index];
  }
}

console.log("O menor número do array é: " + smallest);