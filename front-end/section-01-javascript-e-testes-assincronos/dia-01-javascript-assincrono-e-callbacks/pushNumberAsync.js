// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:
// [ 1, 2, 3 ]