import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import ApiServices from 'services/ApiServices';

axios.defaults.baseURL = 'http://wallet-codewriters.herokuapp.com';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async token => {
    try {
      return await ApiServices.getTransactions(token);
    } catch (error) {
      toast(`${error.message}`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (
    { typeTransaction, sum, date, description, category },
    rejectWithValue,
  ) => {
    try {
      if (typeTransaction || category === '') {
        const data = await ApiServices.createTransaction({
          typeTransaction,
          sum,
          date,
          description,
        });
        // toast.success('Transaction add successfuly!');
        return data.payload;
      } else {
        const data = await ApiServices.createTransaction({
          typeTransaction,
          sum,
          date,
          description,
          category,
        });
        // toast.success('Transaction add successfuly!');
        return data.payload;
      }
    } catch (error) {
      toast.error('Something wrong! Transaction not added!');
      return rejectWithValue(error.message);
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, token) => {
    try {
      const { data } = await axios.delete(`/wallet/transaction/${id}`);
      return data.payload.deletedTransaction;
    } catch (error) {
      toast(`${error.message}`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  },
);

const fetchTransactionsStatistics = createAsyncThunk(
  'transactions/fetchTransactionStatistics',
  async ({ month, year, token }, rejectWithValue) => {
    try {
      return await ApiServices.getStats({ month, year }, token);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const operations = {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  fetchTransactionsStatistics,
};
