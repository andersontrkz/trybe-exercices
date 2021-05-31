Bônus
Bônus 1
Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.
Requisitos
Como uma pessoa que compra em máquinas automáticas, eu gostaria de selecionar um item, depositar o pagamento e receber o item e o troco.
Critérios de aceite
Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
Essa lista deve estar no formato decrescente de valor
É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra
Moedas disponíveis
As moedas serão representadas pelos valores 200 , 100 , 50 , 20 , 10 , 5 , 2 e 1 . Abaixo, existe uma lista de correspondência com os valores em reais (R$)
200 (R$2)
100 (R$1)
50 (R$0,50)
20 (R$0,20)
10 (R$0,10)
5 (R$0,05)
2 (R$0,02)
1 (R$0,01)
A quantidade de cada moeda é infinita, imagine que isso é uma simplificação do problema.
Exemplo
Se uma pessoa comprar itens com valor total igual a R$2,15 (ou seja, 215) e pagar R$3 (ou seja, 300), o valor do troco é R$0,85 (ou seja, 85). Para entregar esse troco à pessoa, deve-se retornar as moedas 1x R$0,50, 1x R$0,20, 1x R$0,10 e 1x R$0,05, formando assim a lista [50, 20, 10, 5] .
Implementação
Finalize a implementação da função getChange(payable, paid) .
payable é o valor a ser pago, ou o valor total
paid é o valor que a pessoa pagou
Copiar
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...

  return change;
}
Testes unitários
Como dito anteriormente, os testes unitários já estão prontos, e sua implementação deve passar por todos eles.
Copiar
const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
Bônus 2
Escreva a função factorial para passar nos testes já implementados.
Copiar
const assert = require('assert');
// escreva a função factorial aqui

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);
Bônus 3
Escreva a função removeMiddle para passar nos testes já implementados.
Copiar
const assert = require('assert');
// escreva a função removeMiddle aqui

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
Bônus 4
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
Copiar
const getLargestNumber = (array) => {
    let largestNumber;
    for (let index = 0; index < array.length - 1; index += 1) {
        if (array[index] > array[index + 1]) {
            largestNumber = [array[index]];
        }
    }
    return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
