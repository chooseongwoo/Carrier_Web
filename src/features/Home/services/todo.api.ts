import { customAxios } from 'shared/api';

export const getTodos = async (date: string) => {
  const { data } = await customAxios.get(`/todo?date=${date}`);
  return data;
};
