const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
// 
const shipLength = () => {
  return ships.reduce((acc, ship) => {
    const { name, length, measurementUnit } = ship
    acc += `${name} is ${length} ${measurementUnit} long;\n`;
    return acc
  }, '');
};

console.log(shipLength()); // return:
/*
Titanic is 269.1 meters long;
Queen Mary 2 is 1132 feet long;
Yamato is 256 meters long;
*/

/*
const shipLength = ({name, length, measurementUnit}) => {
  return `${name} is ${length} ${measurementUnit} long`
}
*/
// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'