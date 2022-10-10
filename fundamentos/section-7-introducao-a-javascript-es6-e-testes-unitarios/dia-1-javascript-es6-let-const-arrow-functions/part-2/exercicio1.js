// const factorial = (n) => {
//   let result = 0;
//   for(let i=1;i<n;i+=1){
//     result += n * i;
//   }
//   console.log(`Esse é o fatorial: ${result}`);
// }

// factorial(4);

const factorial = (n) => n===0 ? 1 : (n * factorial(n - 1));

console.log(`Esse é o fatorial ${factorial(4)}`);