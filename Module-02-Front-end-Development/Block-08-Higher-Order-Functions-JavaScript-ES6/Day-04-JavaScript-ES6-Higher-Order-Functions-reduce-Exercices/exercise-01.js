// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}
S
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);