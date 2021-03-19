//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++) {
  for (let aux = 0; aux < index; aux++) {
    if (numbers[index] < numbers[aux]) {
      let position = numbers[index];

      numbers[index] = numbers[aux];
      numbers[aux] = position;
    }
  }
}

console.log(numbers);