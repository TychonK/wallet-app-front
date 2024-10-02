import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './auth-operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false, // <-- Added to track loading
  error: null,
};

const authReducer = createReducer(initialState, {
  [register.pending]: state => {
    state.isLoading = true; // Set loading to true when registration starts
    state.error = null; // Clear previous errors
  },
  [register.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoading = false; // Set loading to false when registration completes
  },
  [register.rejected]: (state, { payload }) => {
    state.isLoading = false; // Set loading to false when registration fails
    state.error = payload; // Set error message from payload
  },
  [logIn.pending]: state => {
    state.isLoading = true; // <-- Set loading to true on login pending
    state.error = null; // Reset error on new attempt
  },
  [logIn.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.isLoading = false; // <-- Set loading to false on login success
  },
  [logIn.rejected]: (state, { payload }) => {
    state.isLoading = false; // <-- Set loading to false on login failure
    state.error = payload; // Capture error message
  },
  [logOut.fulfilled]: (state, _) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },
});

const errorReducer = createReducer(null, {
  [logIn.pending]: () => null,
  [logIn.rejected]:(_,{payload})=>payload,    
  [logOut.pending]: () => null,
  [logOut.rejected]: (_, { payload }) => payload
})

export default combineReducers({
  authReducer,
  errorReducer
});

