let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigger = 0;

for (let i = 0; i < numbers.length - 1; i += 1) {
    if (numbers[i] > numbers[i + 1]) {
        if (numbers[i] > bigger) {
            bigger = numbers[i];
        }
    } else {
        if (numbers[i + 1] > bigger) {
        }
    }
}

console.log('O maior numero do array é: ', bigger);