import { createSelector } from '@reduxjs/toolkit';

export const selectAuthState = (state) => state.auth;

export const selectIsLoading = createSelector(
  [selectAuthState],
  (auth) => auth.isLoading
);
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = createSelector(
  [selectAuthState],
  (auth) => auth.user
);
export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserPhoto = createSelector(
  [selectUser],
  (user) => user?.photo
);
export const selectUserAccess = (state) => state.auth.user.access;

export const selectWaterRate = (state) => state.auth.user.dailyWaterConsumption;

export const selectIsLoadingPhoto = createSelector(
  [selectAuthState],
  (auth) => auth.isLoadingPhoto
);

export const selectAuthErrorMessage = (state) => state.auth.errorMessage;
export const selectAuthSuccessMessage = (state) => state.auth.successMessage;

export const selectIsAuthenticated = (state) => {
  const token = selectToken(state);
  const isLoggedIn = selectIsLoggedIn(state);
  return !!token && isLoggedIn;
};

export const selectUserData = createSelector(
  [selectUser, selectUserPhoto, selectIsLoading, selectIsLoadingPhoto],
  (user, avatar, isLoading, isLoadingPhoto) => ({
    user,
    avatar,
    isLoading,
    isLoadingPhoto,
  })
);
