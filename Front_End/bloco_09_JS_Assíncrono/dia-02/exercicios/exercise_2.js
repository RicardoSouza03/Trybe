const API_URL = `https://api.coincap.io/v2/assets`

const cryptoList = document.querySelector('#cryptoList');

// Função para converter uma crypto moeda para qualquer moeda, ex: Bitcoin para Real
const cryptoToCoin = async (cryptoCoin, coin) => {
  const CURRENCY_API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cryptoCoin.toLowerCase()}/${coin}.min.json`
  const request = await fetch(CURRENCY_API);
  const response = await request.json();
  return response[coin];
};

const addInHtml = (data) => {
  data.forEach((coin, index) => {
    if (index < 10) {
      const li = document.createElement('li');

      cryptoToCoin(coin.symbol, 'brl')
        .then((idk) => {
          li.innerHTML = `${coin.id} (${coin.symbol}): ${idk}`;
          cryptoList.appendChild(li);
      });
    }
  });
};

// Função para pegar todas as crypto moedas.
const cryptoCoins = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then(({ data }) => addInHtml(data));
};

cryptoCoins();