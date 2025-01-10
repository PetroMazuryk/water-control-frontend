import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDayWater } from '../../api/water.js';

export const dateToLocal = (ms) => {
  const dateObject = Number(ms);
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const localDateWithTimezone = dateObject + timezoneOffset;
  return localDateWithTimezone.toString();
};

export const dateToUTC = (ms) => {
  const dateObject = new Date(Number(ms));
  return new Date(
    Date.UTC(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate(),
      dateObject.getHours(),
      dateObject.getMinutes()
    )
  );
};

export const fetchDailyWater = createAsyncThunk(
  'water/fetchDailyWater',
  async (date, thunkAPI) => {
    try {
      const dateUTC = String(dateToUTC(date).getTime());
      const response = await getDayWater(dateUTC);
      response.data = response.data.map((item) => ({
        ...item,
        date: dateToLocal(item.date),
      }));
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
