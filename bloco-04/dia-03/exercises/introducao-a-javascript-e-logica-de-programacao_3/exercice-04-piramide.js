// 4- Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

let value = 7;
let lineIndex;
let columnIndex;
let line = '';
let text = '*';

let middle = (value + 1) / 2;
let controlLeft = middle;
let controlRight= middle;

for (lineIndex = 0; lineIndex <= middle; lineIndex += 1) {
  for (columnIndex = 1; columnIndex <= value; columnIndex += 1) {
    if (columnIndex > controlRight && columnIndex < controlLeft) {
      line = line + text;
    } else {
      line = line + ' ';
    }
  }
  console.log(line);
  line = '';
  controlRight -= 1;
  controlLeft += 1;
};
