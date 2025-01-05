import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from '../../api/auth';

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

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const result = await loginUser(userData);
      return result.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.data?.message ||
        'Something went wrong. Please try again.';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logOutUser();
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
