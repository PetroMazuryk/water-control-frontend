import instance from './axiosConfig';

export const createWater = async (water) => {
  const data = await instance.post('/water', water);
  return data;
};
export const updateWater = async (id, water) => {
  const data = await instance.patch(`/water/${id}`, water);
  return data;
};

export const getDayWater = async (date) => {
  const { data } = await instance.get(`/water/day/${date}`);
  return data;
};
