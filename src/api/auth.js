import instance from './axiosConfig';

export const registerUser = async (userInfo) => {
  const data = await instance.post('/users/register', userInfo);
  return data;
};
