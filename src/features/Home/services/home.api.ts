import { customAxios } from 'shared/api';
import { authorization } from 'shared/api/header';
import { PostScheduleListReq, PostScheduleReq } from 'entities/calendar/remote';
import { Schedule } from 'entities/calendar/type';

export const getTodos = async (date: string) => {
  const { data } = await customAxios.get(`/todos?date=${date}`);
  return data;
};

export const postTodo = async (todo: {
  title: string;
  date: string;
  isRepeat: boolean;
  priority: string;
  memo: string;
  location: string;
}) => {
  const { data } = await customAxios.post('/todos', todo);
  return data;
};

export const patchTodo = async (id: number) => {
  const { data } = await customAxios.patch(`todos/change/${id}`);
  return data;
};

export const getCategory = async () => {
  const { data } = await customAxios.get('/categorys');
  return data;
};

export const postCategory = async (category: {
  name: string;
  color: string;
}) => {
  const { data } = await customAxios.post('/categorys', category);
  return data;
};

export const patchCategory = async (id: number) => {
  const { data } = await customAxios.patch(`category/change/${id}`);
  return data;
};

export const postScheduleList = async (params: PostScheduleListReq) => {
  const { data } = await customAxios.post<Schedule[]>(
    '/schedules',
    params,
    authorization()
  );
  return data;
};

export const postAddSchedule = async (params: PostScheduleReq) => {
  const { data } = await customAxios.post(
    '/schedules',
    params,
    authorization()
  );
  return data;
};
