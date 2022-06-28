const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/*
const containsA = () => {
  return names.reduce(() => {
    const splitedWords = word.split('')
    if(splitedWords === 'a' || splitedWords === 'A') return acc += 1
    return acc;
  });
};
*/

const containsA = () => {
  return names.reduce((acc, word) => {
    word.toLowerCase().split('').filter((letter) => 
    letter === 'a' ? acc += 1 : letter);
    return acc;
  }, 0);
};

console.log(containsA());