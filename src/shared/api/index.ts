import axios from 'axios';
import { Storage } from 'shared/lib/storage';
import { getRefreshToken } from './header';
import { TOKEN } from 'shared/constants';

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_APPLICATION_KEY,
  timeout: 100000,
});

const refresh = async () => {
  await Storage.delItem(TOKEN.ACCESS);
  const refreshToken = await getRefreshToken();
  const { data } = await customAxios.post('/auth/reissue', {
    token: refreshToken,
  });
  const newAccessToken = data.accessToken;
  await Storage.setItem(TOKEN.ACCESS, newAccessToken);
  return newAccessToken;
};

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    try {
      request._retry = true;
      const newToken = await refresh();
      request.headers.Authorization = `Bearer ${newToken}`;
      return customAxios(request);
    } catch (refreshError) {
      Storage.clear();
      return Promise.reject(refreshError);
    }
  }
);

customAxios.interceptors.request.use(
  async (config) => {
    const token = await Storage.getItem(TOKEN.ACCESS);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
