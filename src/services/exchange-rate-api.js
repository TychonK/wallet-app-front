const BASE_URL = 'api.currencybeacon.com/v1';
const API_KEY = process.env.REACT_APP_CURRENCY_API;

const getCurrency = () => {
  const url = `https://${BASE_URL}/latest?api_key=${API_KEY}`;

  return fetch(url);
};

export default getCurrency;
