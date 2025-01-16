export const selectWaterDailyRecord = (state) => state.water.waterDaily.data;

export const selectDailyIsLoading = (state) => state.water.waterDaily.isLoading;

export const selectWaterMonthlyRecord = (state) =>
  state.water.waterMonthly.data;
export const selectMonthlyIsLoading = (state) =>
  state.water.waterMonthly.isLoading;
export const selectMonthlyIsError = (state) => state.water.waterMonthly.isError;
