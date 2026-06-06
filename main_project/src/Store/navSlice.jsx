import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 'register', // Default to register view based on request
  },
  reducers: {
    navigateTo: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { navigateTo } = navSlice.actions;
export default navSlice.reducer;