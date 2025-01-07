import instance from './axiosConfig';

export const registerUser = async (userInfo) => {
  const data = await instance.post('/users/register', userInfo);
  return data;
};

export const loginUser = async (userInfo) => {
  const data = await instance.post('/users/login', userInfo);
  return data;
};

export const logOutUser = async () => {
  await instance.post('/users/logout');
};

export const currentUser = async () => {
  const data = await instance.get('/users/current');
  return data;
};
