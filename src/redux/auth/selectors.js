export const selectIsLoading = (state) => state.auth.isLoading;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;

export const selectWaterRate = (state) => state.auth.user.dailyWaterConsumption;

export const selectIsAuthenticated = (state) => {
  const token = selectToken(state);
  const isLoggedIn = selectIsLoggedIn(state);
  return !!token && isLoggedIn;
};
