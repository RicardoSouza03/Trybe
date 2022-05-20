//calcula os numeros impares

function calcImpar(number) {
  let numImpar = [];

  for (let impar = 0; impar < number.length; impar += 1) {
    if (number[impar] % 2) {
      numImpar.push(number[impar]);
    }
  }
  return numImpar;
}
console.log(
  calcImpar([
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50,
  ])
);

//calcula os numeros primos

// Estas funções começam pelo primeiro numero primo '2'(unico numero primo que não é impar). Não começa no numero 1, pois, 1 só possui um divisor, ou seja, não atende o requisito de ser um numero que seja divisivel somente por dois numeros(1 e ele mesmo), pois 1 só é divisivel por 1 e nada mais.

let quatidadeNumbersDesejada = 50;
function checaSeEPrimo(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index == 0) {
      return false;
    }
  }
  // Este return está aqui pois, caso estivesse dentro do for iria retornar todos os numeros primos, e ao estar aqui, só sera acessado após o if de for ser atendido, retornando o numero primo
  return true;
}
// Para cada interação de index com number, checa se number é divisivel por index, caso seja, retorna false e passa para o proximo number, caso index não consiga dividir number até que index seja igual ao number, retorna true.
let result = [];
for (let i = 2; i <= quatidadeNumbersDesejada; i += 1) {
  if (checaSeEPrimo(i)) {
    // Poderia ser tmb, checaSeEPrimo(i) === true
    result.push(i);
  }
}
// Caso retorne true, irá adicionar "i" (i == number) ao array "result", e irá passar o proximo "i" para a função checaSeEPrimo, isso irá se repetir até que a quantidadeNumbersDesejada acabe.
console.log(result);
