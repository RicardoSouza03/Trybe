const books = require('./code');

const author = books.find((author) => (author.author.birthYear === 1947)).author;

console.log(author.name)