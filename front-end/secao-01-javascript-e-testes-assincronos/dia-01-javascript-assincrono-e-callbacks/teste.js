let timeA = 1000;
let timeB = 500;
let numA = 4;
let numB = 6;
let numC = 2;
const sum = (a, b) => a + b;
setTimeout(() => {
  numC = sum(numA, numB);
  console.log(numC);
}, timeA);
console.log(numC);
setTimeout(() => {
  console.log(sum(numA, numC) === numB);
}, timeB);
