// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angle1 = 35;
let angle2 = 110;
let angle3 = 35;

let sumAngles = angle1 + angle2 + angle3;

let positive = angle1 > 0 && angle2 > 0 && angle3 > 0;

if(positive){
  if (sumAngles === 180) {
      console.log(true);
    } else {
      console.log(false);
  }
} else {
    console.log('Erro: ângulo inválido');
}