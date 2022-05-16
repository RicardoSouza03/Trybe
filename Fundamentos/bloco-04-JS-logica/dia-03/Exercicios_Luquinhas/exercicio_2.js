//numeros ímpares de 1 a ...

let impar = [];

for (let index = 1; index <= 50; index += 1) {
  if (index % 2 == 1) {
    impar.push(index);
  }
}
console.log(impar);
