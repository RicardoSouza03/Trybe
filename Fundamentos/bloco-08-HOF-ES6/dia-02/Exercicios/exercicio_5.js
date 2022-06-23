const books = require('./code');

// const ok = books.every((person) => person.author.birthYear > 1901 ? true : false)

const ok = books.forEach((person) => {
  if(person.author.birthYear > 1901){
    console.log(`Autor nascido em ${person.author.birthYear} é século XX? ${true}`);
  } else {
    console.log(`Autor nascido em ${person.author.birthYear} é século XX? ${false}`);
  }
})

// Retorno:
// Autor nascido em 1948 é século XX? true
// Autor nascido em 1892 é século XX? false
// Autor nascido em 1920 é século XX? true
// Autor nascido em 1920 é século XX? true
// Autor nascido em 1947 é século XX? true
// Autor nascido em 1890 é século XX? false