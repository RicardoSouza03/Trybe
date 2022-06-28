const books = require('./array');

const reduceNames = () => 
books.reduce((acc, nome, index, array) => {
  if (index + 1 === array.length) {
    acc = acc + `"${nome.author.name}".`
  } else {
    acc = acc + `"${nome.author.name}", `
  }
  return acc;
}, '')

console.log(reduceNames());
