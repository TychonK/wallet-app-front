import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authorizationReducer from './auth/auth-reducer';
import transactionsReducer from './transactions/transactions-reducer';
import { balanceReducer } from './balance';
import modalReducer from './modalSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['authReducer'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authorizationReducer),
    transactions: transactionsReducer,
    balance: balanceReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
