const longestWord = (word) => {
  const arrayWords = word.split(" ");
  let maxLength = 0;


  arrayWords.forEach(element => {
    if(element.length > maxLength) {
      maxLength = element.length;
      result = element;
    }
  });

  return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
