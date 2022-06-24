const books = require('./code');

const BooksNamesThatHasMoreThanSixtyYears =
books.filter((book) => 2022 - book.releaseYear > 60)
.map((bookName) => bookName.name).sort();

console.log(BooksNamesThatHasMoreThanSixtyYears);

// return:
/*
[ 
  'Fundação', 
  'O Chamado de Cthulhu', 
  'O Senhor dos Anéis' 
]
*/