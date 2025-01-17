import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';
import {
  registration,
  login,
  current,
  logOut,
  refreshToken,
  updateUserProfile,
} from './operations';
const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOutReducer: () => {
      return INITIAL_STATE;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
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
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.successMessage = null;
      })
      .addCase(logOut.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logOut.rejected, (_, action) => {
        return {
          ...INITIAL_STATE,
          errorMessage: action.payload || 'Error while logout',
        };
      })
      .addCase(current.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.successMessage = null;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(current.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Something went wrong, try again later';
      })
      .addCase(updateUserProfile.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.successMessage = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = 'Profile updated';
        state.user = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Something went wrong, try again later';
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload;
      })
      .addCase(refreshToken.rejected, () => INITIAL_STATE);
  },
});

export const authReducer = authSlice.reducer;
export const { setToken, logOutReducer, setLoggedIn, setUser } =
  authSlice.actions;
