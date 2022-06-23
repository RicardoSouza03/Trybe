const books = require('./code');

// ordenando livros por data decrescente

books.sort((book1, book2) => book1.releaseYear > book2.releaseYear ? -1 : 1)
books.forEach((book) => console.log(book.releaseYear))

// Resultado:
// 1991
// 1986
// 1965
// 1954
// 1951
// 1928