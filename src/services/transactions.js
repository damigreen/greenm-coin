import axios from 'axios';

const transactionsUrl = 'http://localhost:3001/api/transactions';
const creditUrl = 'http://localhost:3001/api/transactions/credit';
const debitUrl = 'http://localhost:3001/api/transactions/debit';

let token = null
console.log('----------------------------------------------------------')

const setToken = (tokenObj) => {
  token = `bearer ${tokenObj}`;
  return token;
};
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


const getAll = async () => {
  const result = await axios.get(transactionsUrl);
  return result.data;
}

const credit = async (creditObj) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(creditUrl, creditObj, config);
  return response.data;
}

export default {
  getAll,
  setToken,
  credit,
  token,
}
