// const fetch = require('node-fetch');

const fetchCoins = async () => {
const response = await fetch('https://api.coincap.io/v2/assets');
const json = await response.json();
const assets = json.data
  .slice(0, 10);
const assetList = document.getElementById('coins-list');
assets.forEach((coin) => {
  const price = parseFloat(coin.priceUsd)
    .toFixed(2);
  const newLi = document.createElement('li');
  newLi.innerText = `${coin.name} (${coin.symbol}): ${price}`;
  assetList.appendChild(newLi);
});

// console.log(assets);
};

fetchCoins();