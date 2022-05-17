// Retornar a maior, e a menor palavra de um array, considerando o número de caractéres.
// 1- Implementar um array
// 2- Implementar uma função que conte a quantidade de caracteres em cada palavra
// 3- Achar a maior e menor palavra dentro do array
// 4- Isolar a maior e a menor palavra

let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
  menor = array[i].length < menor.length ? array[i] : menor;
  maior = array[i].length > maior.length ? array[i] : maior;
}
console.log(maior);
console.log(menor);
