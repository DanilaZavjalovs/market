import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isOpen: boolean,
}

const initialState: InitialState = {
  isOpen: false,
};

const registerSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    openRegisterModal: (value) => {
      const state = value;
      state.isOpen = true;
    },
    closeRegisterModal: (value) => {
      const state = value;
      state.isOpen = false;
    },
  },
});

export const { openRegisterModal, closeRegisterModal } = registerSlice.actions;
export default registerSlice.reducer;
