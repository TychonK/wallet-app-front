import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import ApiServices from 'services/ApiServices';

import { showSessionExpiredModal } from 'redux/modalSlice';

axios.defaults.baseURL = 'http://wallet-app-back.onrender.com';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (token, { dispatch, rejectWithValue }) => {
    try {
      const data = await ApiServices.getTransactions(token);
      return data;
    } catch (error) {
      if (error.response.data.message === 'jwt expired') {
        dispatch(showSessionExpiredModal());
      } else {
        // Display the error message in a toast
        toast(`${error.message}`, {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }

      return rejectWithValue(error.message);
    }
  },
);


const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (
    { typeTransaction, sum, date, description, category },
    rejectWithValue,
  ) => {
    // const { t } = useTranslation();

    try {
      if (typeTransaction) {
        const data = await ApiServices.createTransaction({
          typeTransaction,
          sum,
          date,
          description,
        });
        // toast.success('Transaction add successfuly!');
        return data.payload;
      } else if (typeTransaction === false && category === '') {
        const data = await ApiServices.createTransaction({
          typeTransaction,
          sum,
          date,
          description
        });
        // toast.success('Transaction add successfuly!');
        return data.payload;
       }
      else {
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
      // toast.error(t('error_something'));
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
  async ({ month, year, token }, { dispatch, rejectWithValue }) => {
    try {
      const data = await ApiServices.getStats({ month, year }, token);
      return data;
    } catch (error) {
      if (error.response.data.message === 'jwt expired') {
        // Trigger the session expired modal
        dispatch(showSessionExpiredModal());
      } else {
        toast.error('404. Something wrong!');
        return rejectWithValue(error.message);
      }
    }
  },
);


export const operations = {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  fetchTransactionsStatistics,
};
