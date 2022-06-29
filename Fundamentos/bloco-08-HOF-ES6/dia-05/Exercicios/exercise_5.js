const myList = [1, 2, 3];

// const [...list] = myList.sort((a, b) => a > b ? -1 : 1)

// const swap = (array) => [array[2], array[1], array[0]];

const swap = ([num1, num2, num3]) => [num3, num2, num1];
console.log(swap(myList));
