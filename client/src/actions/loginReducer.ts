import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isOpen: boolean,
}

const initialState: InitialState = {
  isOpen: false,
};

const loginSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    openModal: (value) => {
      const state = value;
      state.isOpen = true;
    },
    closeModal: (value) => {
      const state = value;
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = loginSlice.actions;
export default loginSlice.reducer;
