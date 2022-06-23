const books = require('./code')

// Desenvolvido com a ajuda de Lucas Ximenes
function smallerName() {
  let nameBook;
  
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length){
      nameBook = book.name;
    }
  })
  // nameBook.sort((a, b) => a.length > b.length ? 1 : -1);
  
  return nameBook;
}

console.log(smallerName())