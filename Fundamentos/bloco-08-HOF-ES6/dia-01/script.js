const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir!!';
const doingThings = (func) => console.log(func());


// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleepTime);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!