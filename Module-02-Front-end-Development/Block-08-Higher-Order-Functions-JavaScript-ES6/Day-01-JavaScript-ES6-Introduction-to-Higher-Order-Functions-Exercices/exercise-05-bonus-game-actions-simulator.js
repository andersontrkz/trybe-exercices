// Bônus - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// Crie uma função que reotorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const dragonDamage = () => {
  const minDamage= 15;
  const { strength } = dragon;
  const dragonDamage = Math.floor((Math.random() * (strength - minDamage) + minDamage));
  return dragonDamage;
}

const warriorDamage = () => {
  const minDamage= warrior.strength;
  const maxDamage= warrior.weaponDmg;
  const warriorDamage = Math.floor((Math.random() * ((maxDamage * minDamage) - minDamage) + minDamage));
  return warriorDamage;
}

const mageTurn = (turn) => {
  let mana = mage.mana;
  const minDamage= mage.intelligence;
  const maxDamage= mage.intelligence * 2;
  let mageDamage = Math.floor((Math.random() * (maxDamage - minDamage) + minDamage));

  for (let index = 0; index < turn; index += 1) {
    mana -= 15;
  }

  if (mana < 15) {
    mageDamage = 'Não possui mana suficiente';
  }

  if (mana < 0) {
    mana = '0';
  }

  return {mageDamage, mana};
}

console.log(mageTurn(8));