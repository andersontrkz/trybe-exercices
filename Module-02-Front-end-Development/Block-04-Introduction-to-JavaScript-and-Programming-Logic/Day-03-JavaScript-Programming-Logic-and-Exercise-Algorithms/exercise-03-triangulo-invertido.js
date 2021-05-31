// 3- Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let value = 5;
let text = '*';
let line = '';
let position = value;

for (let index = 0; index < value; index += 1) {
  for (let index = 0; index <= value; index += 1) {
    if (index < position) {
      line = line + ' ';
    } else {
      line = line + text;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
};
