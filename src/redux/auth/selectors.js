export const selectIsLoading = (state) => state.auth.isLoading;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsAuthenticated = (state) => {
  const token = selectToken(state);
  const isLoggedIn = selectIsLoggedIn(state);
  return !!token && isLoggedIn;
};
