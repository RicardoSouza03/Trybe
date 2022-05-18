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

function maiorValorDoArray() {}
maiorValorDoArray();
