import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
});

export const authReducer = authSlice.reducer;
