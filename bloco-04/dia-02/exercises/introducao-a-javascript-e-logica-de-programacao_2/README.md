Agora a prática
Vamos colocar mão na massa?
Preparamos estes exercícios para você fixar seus conhecimentos em JavaScript - Array e loop For 🎯💪. Vamos lá?
Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

//__________________________________

Bônus
Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
Copiar
for (let i = 1; i < array.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[index] = array[j];
      array[j] = position;
    }
  }
}
Ordene o array numbers em ordem crescente e imprima seus valores;
Ordene o array numbers em ordem decrescente e imprima seus valores;
Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
Copiar

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
