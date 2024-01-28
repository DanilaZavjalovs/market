import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const store = configureStore({
  reducer: {
    loginModal: loginReducer,
    registerModal: registerReducer,
  },
});

export default store;
