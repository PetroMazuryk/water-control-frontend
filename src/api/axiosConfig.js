import axios from 'axios';
import { logOutReducer, setToken } from '../redux/auth/slice';

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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await fetchRefreshToken();
        store.dispatch(setToken(response.token));
        return instance(originalRequest);
      } catch (error) {
        if (error.response.status === 401) {
          store.dispatch(logOutReducer());
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
