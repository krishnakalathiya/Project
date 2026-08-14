import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 'home', 
  },
  reducers: {
    navigateTo: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { navigateTo } = navSlice.actions;
export default navSlice.reducer;