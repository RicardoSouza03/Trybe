const books = require('./code');

const expectedResult = true;

const decade = books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990 ? true : false);

console.log(decade);