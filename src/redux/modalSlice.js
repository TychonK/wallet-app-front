import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    sessionExpired: false,
  },
  reducers: {
    showSessionExpiredModal(state) {
      state.sessionExpired = true;
    },
    hideSessionExpiredModal(state) {
        state.sessionExpired = false;
    },
  },
});

export const { showSessionExpiredModal, hideSessionExpiredModal } =
  modalSlice.actions;

export default modalSlice.reducer;
