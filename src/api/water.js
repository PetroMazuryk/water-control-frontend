import instance from './axiosConfig';

export const getDayWater = async (date) => {
  const { data } = await instance.get(`/water/day/${date}`);
  return data;
};
