import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';
import { registration } from './operations';
const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.successMessage = null;
        state.token = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isNewUser = true;
        state.successMessage = 'Successfully registered';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
