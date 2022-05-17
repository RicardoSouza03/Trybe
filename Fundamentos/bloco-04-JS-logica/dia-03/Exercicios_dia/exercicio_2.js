// inverter uma string
// 1- definir uma var com uma string
// 2- dividir essa string letra por letra
// 3- inverter essa string
// 4- juntar as letras novamente

let word = "Trybe";
console.log(word);

let wordSplit = word.split(""); // esta função, divide a palavra letra por letra, colocando-a dentro de um array.

let wordReverse = wordSplit.reverse(""); // esta função, inverte o array, Ex: [1,2,3] = [3,2,1].

let wordJoin = wordReverse.join(""); // esta função, tira as letras de dentro do array e as junta novamente.

console.log(wordJoin);
