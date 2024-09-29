const BASE_URL = 'api.frankfurter.app';

const getCurrency = () => {
  const url = `https://${BASE_URL}/latest?amount=1&from=USD&to=PLN,EUR`;

  return fetch(url);
};

export default getCurrency;
