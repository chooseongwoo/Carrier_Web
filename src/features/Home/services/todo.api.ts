import { customAxios } from 'shared/api';

const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);
const dateString = year + '-' + month + '-' + day;

export const getTodos = async () => {
  const { data } = await customAxios.get(`/todo?date=${dateString}`);
  return data;
};
