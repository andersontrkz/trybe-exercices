// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = () => {
  const employees = {
    id1: generateEmployer('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: generateEmployer('Luiza Drumond'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: generateEmployer('Carla Paiva'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const generateEmployer = (employer) => {
  let email = employer.toLowerCase().split(' ').join('_');
  email = `${email}@betrybe.com`

  return {employer, email};
}

console.log(newEmployees());
