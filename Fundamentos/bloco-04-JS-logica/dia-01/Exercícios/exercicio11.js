const salarioBruto = 3000; //determinando o valor aqui, será calculado o INSS e IR
let INSS;
let IR;

console.log('Antes do INSS e o IR, o salário é de: ' + salarioBruto + ' R$')

//--------------------------Descontos---------------------

//INSS

if(salarioBruto >= 5189.82){
  INSS = salarioBruto * 0.11 
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  INSS = salarioBruto * 0.11
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.93){
  INSS = salarioBruto * 0.09
} else if(salarioBruto <= 1556.94){
  INSS = salarioBruto * 0.08
}

const calcINSS = (salarioBruto - INSS)
console.log('Após o calculo do INSS o salário passa a ser: ' + calcINSS + ' R$');

//IR

if(calcINSS >= 4664.68){
  IR = (0.275 * calcINSS) - 869.36 
} else if(calcINSS >= 3751.06  && calcINSS <= 4664.68){
  IR = (0.225 * calcINSS) - 636.13
} else if(calcINSS >= 2826.66 && calcINSS <= 3751.05){
  IR = (0.15 * calcINSS) - 354.80
} else if(calcINSS >= 1903.99 && calcINSS <= 2826.65){
  IR = (0.075 * calcINSS) - 142,80
} else if(calcINSS < 1903.99){
  IR = null
}

//--------------------------Conta-------------------------

const calcSalarioLiquido = calcINSS - IR
console.log('Após o calculo do IR o salário passa a ser: ' + calcSalarioLiquido + ' R$')