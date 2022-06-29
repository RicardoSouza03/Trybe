const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const cars = [palio, shelbyCobra, chiron]

const toObject = () => {
  return cars.map(([Modelo, Marca, Ano]) => {
  const newObj = {Modelo,Marca,Ano,};
  return newObj;
});
};

console.log(toObject());

// const toObject = ([modelo, marca, ano]) => {
//   return { modelo, marca, ano, }
// }
// console.log(toObject(palio))