import instance from './axiosConfig';

export const createWater = async (water) => {
  const data = await instance.post('/water', water);
  return data;
};
export const updateWater = async (id, water) => {
  const data = await instance.patch(`/water/${id}`, water);
  return data;
};

export const deleteWater = async (id) => {
  const response = await instance.delete(`/water/${id}`);
  return response.data || {};
};

export const getDayWater = async (date) => {
  const { data } = await instance.get(`/water/day/${date}`);
  return data;
};

export const getWeekWater = async (date) => {
  const data = await instance.get(`/water/week/${date}`);
  return data;
};

export const getMonthWater = async (date) => {
  const data = await instance.get(`/water/month/${date}`);
  return data;
};
