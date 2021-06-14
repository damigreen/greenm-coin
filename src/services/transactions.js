import axios from 'axios';

const transactionsUrl = '/api/transactions';
const creditUrl = '/api/transactions/credit';
const debitUrl = '/api/transactions/debit';

let token = null

const setToken = (tokenObj) => {
  token = `bearer ${tokenObj}`;
  return token;
};


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

const debit = async (debitObj) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(debitUrl, debitObj, config);
  return response.data;
}


export default {
  getAll,
  setToken,
  credit,
  debit,
  token,
}
