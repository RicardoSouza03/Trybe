let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// --------------------- exercicio 1

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

console.log("-------------------------------");
// --------------------- exercicio 2

for (let sum of numbers) {
  sum += 1;
  console.log(sum);
}
console.log("-------------------------------");
// --------------------- exercicio 3
let soma = 0;
for (let num = 0; num < numbers.length; num += 1) {
  soma += numbers[num];
}
console.log(soma);
console.log(soma / numbers.length);

console.log("-------------------------------");
// --------------------- exercicio 4

if (soma > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}

console.log("-------------------------------");
// --------------------- exercicio 5
// referência: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
let maiorNum = 0;
for (let maior = 0; maior < numbers.length; maior += 1) {
  if (numbers[maior] > maiorNum) {
    maiorNum = numbers[maior];
  }
}
console.log(maiorNum);

//o elemento 'for', irá percorrer todo o array, aplicando a função a cada um dos elementos do array, e a cada aplicação o valor de 'maiorNum' será reatribuida, ao final, o maior valor irá permaneçer, retornando o valor mais alto (que seja positivo) contido dentro do array que foi percorrido.

console.log("-------------------------------");
// --------------------- exercicio 6

let numImpar = 0;
let numPar = 0;

for (let impar = 0; impar < numbers.length; impar += 1) {
  if (numbers[impar] % 2) {
    numImpar = numbers[impar];
    console.log(`O numero ${numImpar} é impar`);
  } else if (numbers[impar] % 3) {
    numPar = numbers[impar];
    console.log(`O numero ${numPar} é Par`);
  }
}

//a partir destas linhas de códigos consegui desenvolver o exercicio.
// for(let impar of numbers){
//   impar %= 2
//   if(impar === 1){
//     console.log(`O numero ${numbers[impar]} é impar`)
//   }
// }

console.log("-------------------------------");
// --------------------- exercicio 7

let menorNum = maiorNum;
for (let menor = 0; menor < numbers.length; menor += 1) {
  if (menorNum > numbers[menor]) {
    menorNum = numbers[menor];
  }
}
console.log(menorNum);

console.log("-------------------------------");
// --------------------- exercicio 8

let newArrey = [];

for (let nw = 0; nw <= 25; nw += 1) {
  newArrey[nw] = nw;
  // newArrey = newArrey + nw + ','
}
console.log(newArrey);

console.log("-------------------------------");
// --------------------- exercicio 9

let arreyNew = [];

for (let div = 0; div <= 25; div += 1) {
  arreyNew[div] = div / 2;
  console.log(arreyNew[div]);
}
