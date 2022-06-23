console.log('---------------------"forEach"------------------------');

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach ((element) => {
  showEmailList(element); 
});

console.log('---------------------"find"---------------------------');

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  if(number % 3 === 0 && number % 5 === 0) return true
}

const divisibels = numbers.find(findDivisibleBy3And5);
console.log(divisibels);

console.log('----------------------------------------------------');

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((nome) => nome.length === 5);

console.log(findNameWithFiveLetters);

console.log('-----------------------------------------------------');

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = musicas.find((id) => id.id === '31031685') 

console.log(findMusic)

console.log('---------------------"some"-------------------------');

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (nome, callback) => callback.some((name) => name === nome)  

console.log(hasName('Cláudia', names2))// return true, pois existe 'Cláudia' em names2

console.log('--------------------"every"--------------------------');

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (callback, minimumAge) => callback.every((age) => age.age >= minimumAge)

console.log(verifyAges(people, 18)); // return false, 'José' tem 16 anos

console.log('--------------------"sort"--------------------------');

// people.sort((a, b) => a.name > b.name ? 1 : -1); // ordena por nome
people.sort((a, b) => a.age > b.age ? 1 : -1); // ordena por idade

console.log(people);