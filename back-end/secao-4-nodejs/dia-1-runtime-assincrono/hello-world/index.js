const readline = require('readline-sync');

console.log('Hello, World!');

const name = readline.question('What\'s your name ? ');
const age = readline.questionInt('How old are you ? ');

console.log(`Hello, ${name}! You are ${age} years old!`);