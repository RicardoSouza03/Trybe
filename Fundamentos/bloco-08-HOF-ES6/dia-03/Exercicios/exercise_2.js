const books = require('./code');

const nameAndAge = books.map((book) => {
  const obj = {};
  obj.age = book.releaseYear - book.author.birthYear;
  obj.author = book.author.name;
  return obj;
}).sort((a, b) => a.age > b.age ? 1 : -1);

console.log(nameAndAge);

// making it whit less lines:
const nameAndAges = books.map((book) => 
({age: book.releaseYear - book.author.birthYear,
author: book.author.name})).sort((a, b) => a.age > b.age ? 1 : -1);

console.log(nameAndAges);

// return in both:
/*[
  { age: 31, author: 'Isaac Asimov' },
  { age: 38, author: 'H. P. Lovecraft' },
  { age: 39, author: 'Stephen King' },
  { age: 43, author: 'George R. R. Martin' },
  { age: 45, author: 'Frank Herbert' },
  { age: 62, author: 'J. R. R. Tolkien' }
]*/