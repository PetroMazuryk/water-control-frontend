import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';
import { registration, login } from './operations';
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
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.successMessage = 'Successfully logged in';
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
