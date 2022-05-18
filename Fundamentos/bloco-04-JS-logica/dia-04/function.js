//refazendo códigos do dia 01-bloco-04, utilizando functions

// exercício 1
function operacoes(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
}
operacoes(4, 10);

// exercício 2
function maiorValor(valor1, valor2) {
  if (valor1 > valor2) {
    console.log(`O valor ${valor1} é o maior que o valor ${valor2}`);
  } else if (valor2 > valor1) {
    console.log(`O valor ${valor1} é o maior que o valor ${valor2}`);
  }
}
maiorValor(10, 32);

// exercício 3
function maiorValorDentreTres(valor1, valor2, valor3) {
  if (valor1 > valor2 && valor1 > valor3) {
    console.log("valor 1 é o maior valor");
  } else if (valor2 > valor1 && valor2 > valor3) {
    console.log("valor 2 é o maior valor");
  } else if (valor3 > valor1 && valor3 > valor2) {
    console.log("valor 3 é o maior valor");
  } else {
    console.log("erro");
  }
}
maiorValorDentreTres(10, 253, 1122);

// exercício 4
function numberIsMoreThanZero(value) {
  if (value > 0) {
    console.log("positive");
  } else if (value < 0) {
    console.log("negative");
  } else {
    console.log(0);
  }
}
numberIsMoreThanZero(-10);

// exercício 5
function somaAngulosInternosTriangulo(angulo1, angulo2, angulo3) {
  if (angulo1 + angulo2 + angulo3 == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}
somaAngulosInternosTriangulo(10, 90, 80);
