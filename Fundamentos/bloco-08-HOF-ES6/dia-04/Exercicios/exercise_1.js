const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

console.log(arrays);

function flatten() {
  return arrays.reduce((acc, curr) => [acc + curr])
}

console.log(flatten());