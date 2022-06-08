const factorialNum = (num) => {
  const fatorial = num == 0 ? 1 : num * factorialNum(num - 1);
  return fatorial;
  // if (num == 0) {
  //   return 1;
  // } else {
  //   return num * factorialNum(num - 1);
  // }
};

console.log(factorialNum(10));

let frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
const longestWord = (sentence) => {
  const splited = sentence.split(' ');
  let word = '';
  for (let i = 0; i < splited.length; i += 1) {
    if (splited[i].length > word.length) {
      word = splited[i];
    }
  }
  return console.log(word);
}; // retorna 'aconteceu'

longestWord(frase);

const counter = document.querySelector('#counter');
const button = document.querySelector('#button');

const addToCounter = () => {
  counter.innerHTML = parseFloat(counter.innerText) + 1;
};

button.addEventListener('click', addToCounter);

const addWordIn = (word, string) => {
  let text = word.split(' ');
  const letter = 'x';
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === letter) {
      text[i] = string;
    }
  }

  return console.log(text.join(' '));
};

const arraySkills = ['Js', 'React', 'Vue', 'GIT'];
arraySkills.sort();
const skills = `${arraySkills[0]}, ${arraySkills[1]}, ${arraySkills[2]} e ${arraySkills[3]}`;

addWordIn(`Tryber x aqui! \nE minha skills são: ${skills} `, 'Ricardo Souza');

const phrase = document.querySelector('#phrase');
const input = document.querySelector('#input');

input.addEventListener(
  'input',
  () => (phrase.innerHTML = `Algo ${input.value} aconteceu`)
);
