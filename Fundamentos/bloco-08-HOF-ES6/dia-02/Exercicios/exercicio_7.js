const books = require('./code');

// const expectedResult = false;

const functionOK = () => { 
  let variavel = true
  books.forEach((book) => {
    books.forEach((livro) => {
      if(book.author.birthYear === livro.author.birthYear &&
        book.author.name !== livro.author.name){
          variavel = false
        }
    })
  })
  return variavel;
}

console.log(functionOK())