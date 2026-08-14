import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice.jsx';
import authReducer from './authSlice.jsx';

export const store = configureStore({
  reducer: {
    navigation: navReducer,
    auth: authReducer,
  },
});