const books = require('./code');

const AuthorsNames = books.map((book) =>
book.author.name).sort();

const fantasyOrScienceFictionAuthors = books.filter((book) => 
book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((person) =>
person.author.name).sort();

console.log(fantasyOrScienceFictionAuthors);

// return:
/*[
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]*/