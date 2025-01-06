import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

let store;
export const injectStore = (_store) => {
  store = _store;
};

export const fetchRefreshToken = async () => {
  const { data } = await axios.post(
    `${BASE_URL}/users/refresh`,
    {},
    { withCredentials: true }
  );
  return data;
};

instance.interceptors.request.use(
  (config) => {
    if (store) {
      const state = store.getState();
      const token = state?.auth?.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
