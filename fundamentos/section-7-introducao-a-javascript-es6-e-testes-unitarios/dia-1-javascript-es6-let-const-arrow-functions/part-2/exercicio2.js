// function longestWord(phrase) {
//   let phraseArray = phrase.split(' ');
//   let longestWord = '';
  
//   for (let i=0; i<phraseArray.length; i+=1){
//     if (phraseArray[i].length > longestWord.length) longestWord = phraseArray[i];
//   }
  
//   console.log(longestWord);
// }
// ------------------ Usando o Metodo Sort -------------------------------------------
//
// function longestWord(phrase) {
//   let longestWord = phrase.split(' ').sort(function(a, b) { return b.length - a.length; });
//   console.log(longestWord[0]);
// }
//----------------- Sort e Arrow function --------------------------------------------

const longestWord = (phrase) => {
  let longestWord = phrase.split(' ').sort(function(a, b) { return b.length - a.length; });
  console.log(longestWord[0]);
}





longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'); // retorna 'aconteceu'