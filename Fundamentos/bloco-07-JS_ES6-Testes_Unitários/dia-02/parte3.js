const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// função que lista todas as keys de um obj

const listKeys = (obj) => {
  console.log(Object.keys(obj));
};
listKeys(lesson2);

console.log('-----------------------------------');

// atribuindo key 'turno' com valor 'tarde' ao obj 'lesson2'
lesson2.turno = 'tarde';
console.log(lesson2);

console.log('-----------------------------------');

// função que retorna o tamanho de um obj
const objLength = (obj) => {
  let length = Object.keys(obj).length;
  console.log(`O tamanho do objeto é ${length}`);
};
objLength(lesson2);

console.log('-----------------------------------');

// função para listar todos os valores de um obj
const listValues = (obj) => {
  console.log(Object.values(obj));
};
listValues(lesson2);

console.log('-----------------------------------');

// função para colocar todos os objetos dentro de outro obj
let newObj = {};
const allLessons = () => {
  Object.assign(newObj, { lesson1 }, { lesson2 }, { lesson3 });
  console.log(newObj);
};
allLessons();

console.log('-----------------------------------');

// função que retorna o numero total de estudante de 'allLessons'
const allStudents = () => {
  let one = Object.values(newObj['lesson1']);
  let two = Object.values(newObj['lesson2']);
  let three = Object.values(newObj['lesson3']);
  console.log(`Os estudantes ao todo são: ${one[1] + two[1] + three[1]}`);
};
allStudents();

console.log('-----------------------------------');

// função que obtém o valor de uma chave atraves de seu index
const getKeyI = (obj, i) => {
  let objIndex = Object.values(obj);
  console.log(objIndex);
  console.log(objIndex[i]);
};
getKeyI(lesson2, 3);

console.log('-----------------------------------');

// função que retorna chave/valor caso existam
const checkKeyValue = (obj, key, value) => {
  let entireObj = Object.entries(obj);
  for (let contain in entireObj) {
    for (let i = 0; i <= contain.length; i += 1) {
      if (entireObj[contain][i] === key || entireObj[contain][i] === value) {
        console.log(`'${entireObj[contain][i]}' existe dentro deste objeto`);
      }
    }
  }
};
checkKeyValue(lesson2, 'turno', 'manhã');
