import { customAxios } from 'shared/api';
import { authorization } from 'shared/api/header';

export const getLoginLink = async () => {
  const { data } = await customAxios.get('/auth', authorization());
  return data;
};
