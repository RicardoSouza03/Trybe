console.log(localStorage.length); // o retorno é o valor: 0
localStorage.setItem("firstname", "Adam"); // salva key = 'firstname' e value = 'Adam'
localStorage.setItem("lastname", "Smith"); // salva key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem("lastname")); // retorna o valor 'Smith'
console.log(localStorage.length); // o retorno é o valor: 2
localStorage.removeItem("lastname"); // remove a key = 'lastname'
console.log(localStorage.length); // o retorno é o valor: 1
localStorage.clear(); // limpa localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0

console.log("-------");

console.log(sessionStorage.length); // o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam"); // key = 'firstname' e value = 'Adam'
sessionStorage.setItem("lastname", "Smith"); // key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem("lastname")); // retorna o valor 'Smith'
console.log(sessionStorage.length); // o retorno é o valor: 2
sessionStorage.removeItem("lastname"); // remove a key = 'lastname'
console.log(sessionStorage.length); // o retorno é o valor: 1
sessionStorage.clear(); // limpa sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
