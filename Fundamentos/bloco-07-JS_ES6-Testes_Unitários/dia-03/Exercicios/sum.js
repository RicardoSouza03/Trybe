function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let encodeString = string.split('');
  for (let index in encodeString) {
    if (encodeString[index] === 'a') {
      encodeString[index] = 1;
    } else if (encodeString[index] === 'e') {
      encodeString[index] = 2;
    } else if (encodeString[index] === 'i') {
      encodeString[index] = 3;
    } else if (encodeString[index] === 'o') {
      encodeString[index] = 4;
    } else if (encodeString[index] === 'u') {
      encodeString[index] = 5;
    }
  }
  return encodeString.join('');
}

function decode(number) {
  let decodeString = number.split('');

  for (let index in decodeString) {
    if (decodeString[index] === '1') {
      decodeString[index] = 'a';
    } else if (decodeString[index] === '2') {
      decodeString[index] = 'e';
    } else if (decodeString[index] === '3') {
      decodeString[index] = 'i';
    } else if (decodeString[index] === '4') {
      decodeString[index] = 'o';
    } else if (decodeString[index] === '5') {
      decodeString[index] = 'u';
    } 
  }
  return decodeString.join('');
}

function techList(arrayTech, name) {
  let nome = name;
  let techListItens = arrayTech.sort();
  let tecnologias = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayTech.length; i += 1) {
    tecnologias.push({
      tech: techListItens[i],
      name: nome,
    });
  }
  return tecnologias;
}

function hydrate(string) {
  let reg = /\d+/g;

  let result = string.match(reg);
  let arrayOfResult = [];
  for (let i = 0; i < result.length; i += 1) {
    arrayOfResult.push(parseInt(result[i], 0));
  }
  let count = 0;
  for (let index = 0; index < arrayOfResult.length; index += 1) {
    count += arrayOfResult[index];
  }
  if (count === 1) {
    return `${count} copo de água`;
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };
