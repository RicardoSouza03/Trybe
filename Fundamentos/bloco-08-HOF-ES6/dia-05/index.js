const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

console.log('-----------------------------------------------------------------------');

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));

console.log('-----------------------------------------------------------------------');

const multiply = (number = 1, value = 1) => number * value;

console.log(multiply(8));