import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyWater } from './operations';

import { WATER_INITIAL_STATE } from './initialState';

const waterSlice = createSlice({
  name: 'water',
  initialState: WATER_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      //=================== fetchDailyWater ===================
      .addCase(fetchDailyWater.pending, (state) => {
        state.waterDaily.isLoading = true;
      })
      .addCase(fetchDailyWater.fulfilled, (state, action) => {
        const { dailyAmount, dailyPercentage, data } = action.payload;

        state.waterDaily.isLoading = false;

        state.waterDaily.amount = dailyAmount;
        state.waterDaily.percentage = dailyPercentage;
        state.waterDaily.data = data;
        state.waterDaily.data.sort((a, b) => Number(a.date) - Number(b.date));
      })
      .addCase(fetchDailyWater.rejected, (state) => {
        state.waterDaily.isLoading = false;
      });
  },
});

export const waterReducer = waterSlice.reducer;
