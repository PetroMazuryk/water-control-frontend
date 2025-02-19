import { monthsName } from '../constants/monthsName.js';

export const getDateMonthString = (date, t) => {
  const dateNow = new Date();
  const isToday =
    dateNow.getFullYear() === date.getFullYear() &&
    dateNow.getMonth() === date.getMonth() &&
    dateNow.getDate() === date.getDate();
  return {
    isToday,
    day: date.getDate(),
    month: t(monthsName[date.getMonth()]),
  };
};
