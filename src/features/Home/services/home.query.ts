import { queryOptions, useQuery } from '@tanstack/react-query';
import { getCategory, getTodoList, getScheduleList } from './home.api';
import { GetScheduleListReq } from 'entities/calendar/remote';
import { homeKeys } from './home.keys';

export const useTodoListQuery = {
  getTodoList: (date: string) =>
    queryOptions({
      queryKey: [homeKeys.TODO_LIST, date],
      queryFn: () => getTodoList(date),
    }),
};

export const categoryQuery = {
  getCategories: () =>
    queryOptions({
      queryKey: ['Categories'],
      queryFn: () => getCategory(),
    }),
};

export const useScheduleListQuery = (params: GetScheduleListReq) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [homeKeys.SCHEDULE_LIST],
    queryFn: () => getScheduleList(params),
  });

  return { data, ...restQuery };
};
