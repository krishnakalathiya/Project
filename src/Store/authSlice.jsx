import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registrationForm: {
    email: '',
    phone: '',
    password: '',
  },
  isSubmitting: false,
  successMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.registrationForm[field] = value;
    },
    submitRegistrationStart: (state) => {
      state.isSubmitting = true;
    },
    submitRegistrationSuccess: (state, action) => {
      state.isSubmitting = false;
      state.successMessage = action.payload;
      // Flush inputs on successful registration simulation
      state.registrationForm = { email: '', phone: '', password: '' };
    },
    clearMessages: (state) => {
      state.successMessage = '';
    }
  },
});

export const { 
  updateFormField, 
  submitRegistrationStart, 
  submitRegistrationSuccess,
  clearMessages 
} = authSlice.actions;

export default authSlice.reducer;