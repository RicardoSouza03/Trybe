const myName = 'Ricardo' //string
const birthCity = 'São Bernardo do Campo'
// birthCity = 'Piauí' -- > Error
let birthYear = 2003 //number
birthYear = 2030
let isValid = true; //boolean
let algo; //undefined
let color = null; //redefinição

console.log(myName)
console.log(birthCity)
console.log(birthYear)

// --------------------------------------- operadores lógicos

const base = 5
let height = 8

const area = (base*height)

console.log(area);

const perimeter = (base + base) + (height + height)

console.log(perimeter)

// ----------------------------------------- if/else

const nota = 67 

if (nota >= 80){
  console.log('Parabéns, você foi aprovada(o)!')
} else if (nota < 80 && nota >= 60){
  console.log('Você está na nossa lista de espera')
} else { 
  console.log('Você foi reprovada(o)')
}

// ----------------------------------- && AND

const currentHour = 4
let message = ''

if(currentHour > 22){
  message = 'Não deveríamos comer nada, é hora de dormir'
} else if(currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D'
} else if(currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?'
} else if(currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço!!!'
} else if(currentHour >= 4 && currentHour < 11){
  message = 'Hmmm, cheiro de café recém passado'
}

console.log(message)

// ----------------------- teste

let myBox;

if(myBox === undefined){
  myBox = 'hola'
}

console.log(myBox)

//--------------------------------------- ||OR

let weekDay = 'domingo'

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}else if (weekDay === 'sábado' || weekDay === 'domingo') {
  console.log('FINALMENTE,descanso merecido UwU');
}
console.log(weekDay)

//------------------------------------------ !NOT 


console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

//--------------------------------------- Switch e Case


let candidato = 'reprovada' //'reprovada', 'lista' ,'aprovada'

switch(candidato){
  case 'aprovada': console.log('Você foi aprovada(o)');
  break;

  case 'lista': console.log('Você está na lista de espera');
  break;

  case 'reprovada': console.log('Você foi reprovada(o)');
  break;

  default: console.log('não se aplica');
}