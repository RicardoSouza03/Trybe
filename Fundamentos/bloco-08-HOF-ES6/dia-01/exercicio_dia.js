const nameEmail = (nome) => {
  const email = nome.split(' ')
  return {nomeCompleto: nome, email: `${email.join('_')}@trybe.com`}
}

const newEmployees = () => {
  const employees = {
    id1: nameEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nameEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nameEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

console.log('------------------------------------------------------------');

const randomNum = () => Math.floor(Math.random() * 5) + 1
const checkIsNum = (random, num) => random() === num ? `Parabéns você ganhou` : `Tente novamente`

console.log(checkIsNum(randomNum, 2));

console.log('------------------------------------------------------------');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const matchAnswers = (gab, answer) => {
  let total = 0
  for(let i = 0; i < gab.length; i += 1){
    if(gab[i] == answer[i]){
      total += 1
    } else if (gab[i] !== answer) {
      total -= 0.5
    }
  }
  return console.log(total)
}

const checkAnswers = (gab, answer, func) => func(gab, answer)

checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, matchAnswers)
 