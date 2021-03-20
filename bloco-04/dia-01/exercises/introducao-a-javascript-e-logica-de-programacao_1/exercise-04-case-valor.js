// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor = 'positivo';

switch (valor) {
  case 'positivo':
    console.log('positive');
    break;

  case 'negativo':
    console.log('negative');
    break;

  default:
    console.log('zero');
    break;
}
