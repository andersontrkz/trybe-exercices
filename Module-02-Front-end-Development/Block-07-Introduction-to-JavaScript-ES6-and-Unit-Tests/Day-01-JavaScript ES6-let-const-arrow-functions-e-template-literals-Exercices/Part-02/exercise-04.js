const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (name) {
    let result = `Tryber ${name} aqui!

    Tudo bem?

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    ${index + 1} - ${skill}`);

    result = `${result} 
    
    #goTrybe`;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));
