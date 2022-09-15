let clickCount = 0;
const counterDisplay = document.getElementById('counter');
const button = document.getElementById('btn');
counterDisplay.innerText = clickCount;

button.addEventListener('click', Count = () =>{
  clickCount += 1;
  counterDisplay.innerText = clickCount;
});