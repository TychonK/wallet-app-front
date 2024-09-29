import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    // const { t } = useTranslation();

    try {
      const { data } = await axios.post(
        'https://wallet-app-back.onrender.com/api/auth/signup',
        credentials,
      );
      token.set(data.payload.token);
      // toast.success(t('register_success'));
      toast.success(
        'Your registration has been successfully completed. You have just been sent an email containing membership activation instructions',
      );
      return data;
    } catch (error) {
      // toast.error(t('error_something'));
      toast.error('Something went wrong! Please, try again');
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    // const { t } = useTranslation();
    try {
      const { data } = await axios.post(
        'https://wallet-app-back.onrender.com/api/auth/login',
        credentials,
      );
      token.set(data.payload.token);
      return data.payload;
    } catch (error) {
      // toast.error(t('error_something'));
      toast.error('Something went wrong! Please, try again');
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  // const { t } = useTranslation();

  try {
    await axios.get('https://wallet-app-back.onrender.com/api/auth/logout');
    token.unset();
  } catch (error) {
    // toast.error(t('error_something'));
    toast.error('Something went wrong! Please, try again');
    return error.message;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.authReducer.token;
    if (persistedToken === null) {
      return;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get(
        'http://wallet-app-back.onrender.com/api/users/current',
      );
      return data;
    } catch (error) {
      return error.message;
    }
  },
);
