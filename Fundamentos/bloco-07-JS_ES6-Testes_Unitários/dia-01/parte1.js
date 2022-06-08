const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  const scope =
    escopo === true
      ? `${ifScope} ótimo, fui utilizada no escopo !`
      : 'Não devo ser utilizada fora meu escopo (else)';
  // if (escopo === true) {
  //   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  //   ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
  //   console.log(ifScope);
  // } else {
  //   var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  //   console.log(elseScope);
  // }
  console.log(scope);
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortNums = (num1, num2) => num1 - num2;

console.log(`${oddsAndEvens.sort(sortNums)}`); // será necessário alterar essa linha 😉
