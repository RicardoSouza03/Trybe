const books = require('./array');

/*
const avarageAge = () => {
  return books.reduce((acc, age) => {
    const avarage = age.releaseYear - age.author.birthYear
    return acc += avarage / books.length
  }, 0)
}
*/

const avarageAge = () => books.reduce((acc, age) => acc += (age.releaseYear - age.author.birthYear), 0) / books.length;

console.log(avarageAge());