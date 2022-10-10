function checkPalindrome(word){ //1
    let splitted = word.split("");
    let reversed = splitted.reverse();
    let rejoined = reversed.join("");
    if (word === rejoined) return true;
    return false;

}

console.log('A Palavra é um palindromo ? ', checkPalindrome('arara'));
console.log("");

let numbers = [2, 3, 6, 7, 10, 1];

function checkHighestNumber(arrayOfNumbers){ //2
let compare = 0;

for (let index in arrayOfNumbers){
   if (arrayOfNumbers[index] > compare){
    compare = arrayOfNumbers[index];
   }
    
}

for (let index in arrayOfNumbers){
    if (compare === arrayOfNumbers[index]){
        return index;
    }
}
    
}

console.log('O Maior número do array esta na posição: ' ,checkHighestNumber(numbers));
console.log('');

function checkLowestNumber(arrayOfNumbers){ //3
let compare = 0;

for (let index in arrayOfNumbers){
   if (arrayOfNumbers[index] < compare){
    compare = arrayOfNumbers[index];
   }
    
}

for (let index in arrayOfNumbers){
    if (compare === arrayOfNumbers[index]){
        return index;
    }
}
}

let numbers2 = [2, 4, 6, 7, 10, 0, -3];

console.log('O Menor número do array esta na posição: ' ,checkLowestNumber(numbers2));

function checkBiggerName(arrayOfNames){ //4
let compare = arrayOfNames[0].length;
for (let index in arrayOfNames){
    if (arrayOfNames[index].length > compare){
        compare = arrayOfNames[index].length;
    }
}

for (let index in arrayOfNames){
    if(compare === arrayOfNames[index].length){
        return arrayOfNames[index];
    }
}
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log('');
console.log('Maior nome no array: ', checkBiggerName(names));

function checkRepeatingNumber(repeatingNumbers){ //5
    let compare, hits = 0, hitsCompare = 0, result = repeatingNumbers[0];

    for (let index1 in repeatingNumbers){
    compare = repeatingNumbers[index1];
    for (let index2 in repeatingNumbers){
        if (compare === repeatingNumbers[index2]){
            hits += 1;
        }
    }
    if(hits > hitsCompare){
        hitsCompare = hits;
        result = repeatingNumbers[index1];
    }
    hits = 0;

    }
    return result;
}

let arrayOfRepeatingNumbers = [2, 3, 2, 5, 8, 2, 3];
console.log('');
console.log('Número que mais se repete: ', checkRepeatingNumber(arrayOfRepeatingNumbers));

function sumOfNNumbers(n){ //6
    let sum = 0, numbersInTheSum = [], stylishlog = '';
    if (n < 1) return 'Not a valid number';

    for (let index = 1;index <= n;index +=1){
        numbersInTheSum.push(index);
        numbersInTheSum.push('+');
        sum += index;
    }   

    numbersInTheSum.pop();
    numbersInTheSum.push(' =');

    for(let index in numbersInTheSum){
        numbersInTheSum[index].toString();
        stylishlog += numbersInTheSum[index];
    }

    
return stylishlog + sum;
}

let numberOfSums = 10
console.log('');
console.log(sumOfNNumbers(numberOfSums));

// function checkEndOfWord(word, ending){
//     let check = 0;
//     word = word.reverse('');
//     ending = ending.reverse('');

//     for (let index of ending){
//         if(ending[index] === word[index]) check += 1;
//     }
//     if(check == )

// }
