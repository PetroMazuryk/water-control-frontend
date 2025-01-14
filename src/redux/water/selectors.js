export const selectWaterDailyRecord = (state) => state.water.waterDaily.data;

export const selectDailyIsLoading = (state) => state.water.waterDaily.isLoading;

export const selectMonthlyIsLoading = (state) =>
  state.water.waterMonthly.isLoading;
