function invertePalavra(word) {
  let wordSplit = word.split("");
  let wordReverse = wordSplit.reverse("");
  let wordJoin = wordReverse.join("");
  return wordJoin;
}

function verficandoPalindromo(palavra) {
  if (invertePalavra(palavra) === palavra) {
    console.log(true);
  } else {
    console.log(false);
  }
}
verficandoPalindromo("ovo");

let arrayDeNumbers = [2, 3, 2, 5, 8, 2, 3];

function valorDoArrayQueMaisSeRepete(numbers) {
  let array = numbers;

  array.sort();

  let numeroTeste1 = array[0];
  let numeroTeste2;
  let vezes1 = 0;
  let vezes2 = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === numeroTeste1) {
      vezes1 += 1;
    } else if (array[i] === numeroTeste2 || numeroTeste2 == undefined) {
      vezes2 += 1;
      numeroTeste2 = array[i];
    } else {
      if (vezes1 > vezes2) {
        numeroTeste2 = array[i];
        vezes2 = 0;
      } else {
        numeroTeste1 = array[i];
        vezes1 = 0;
      }
    }
  }

  if (vezes1 > vezes2) {
    return numeroTeste1;
  } else {
    return numeroTeste2;
  }
}
console.log(valorDoArrayQueMaisSeRepete(arrayDeNumbers));
