const books = require('./array');

/*
const longestNameBook = () => {
  books.reduce((acc, bookName) => {
    if (acc < bookName.name.length) return bookName
  }, 0);
}
*/

const longestNameBook = () => 
books.reduce((acc, bookName) => 
acc < bookName.name.length ? acc = bookName : acc, 0);

console.log(longestNameBook());