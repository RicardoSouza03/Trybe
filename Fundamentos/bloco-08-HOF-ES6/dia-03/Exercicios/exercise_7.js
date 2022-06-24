const books = require('./code');

const authors = books.map((book) => book.author.name);

const comecaComInicias = authors.filter((author) => author[1] === '.' && author[7] === '.' ? author : false);

const authorWith3DotsOnName = books.filter((book) => book.author.name === comecaComInicias[0])[0].name;

console.log(authorWith3DotsOnName); // return: O Senhor dos Anéis

console.log(comecaComInicias); // return: [ 'J. R. R. Tolkien' ]

console.log(authors);
// return: 
/*[
  'George R. R. Martin',
  'J. R. R. Tolkien',
  'Isaac Asimov',
  'Frank Herbert',
  'Stephen King',
  'H. P. Lovecraft'
]*/



