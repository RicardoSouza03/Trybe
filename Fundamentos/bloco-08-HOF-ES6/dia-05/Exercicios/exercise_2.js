const sum = (...param) => param.reduce((acc, num) => acc += num);

console.log(sum(10, 20, 50));