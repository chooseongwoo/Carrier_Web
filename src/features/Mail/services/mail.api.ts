import { customAxios } from 'shared/api';

export const getMailList = async () => {
  const { data } = await customAxios.get('/');
  return data;
};
