//criar algoritimo que retorne fatorial (!) de 10
// 1- criar variaveis que recebem o !, e o resultado
// 2- utilizar um loop que faça a multiplicação da ! enquanto ela não acabar
// e para isso utilizaremos o valor em que o for está para multiplicar o resultado,
// Ex: utilizando ! de 5
// for(1) = 1 * 5 = 10; for(2) = 2 * 10 = 20; ... ; for(4) = 4 * 60 = 120;
// 3- devolver o valor de resultado

let fatorial = 5;
let resultado = fatorial;

for (let i = 1; i < fatorial; i = i + 1) {
  resultado = i * resultado;
}
console.log(resultado);
