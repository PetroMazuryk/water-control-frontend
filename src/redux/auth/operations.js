import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../../api/auth';

export const registration = createAsyncThunk(
  'auth/registration',
  async (userData, thunkAPI) => {
    try {
      const result = await registerUser(userData);

      return result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.data?.message || 'An error occurred'
      );
    }
  }
);
