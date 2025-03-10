import { queryOptions } from '@tanstack/react-query';
import { getCategory, getTodoList, getScheduleList, getTips } from './home.api';
import { GetScheduleListReq } from 'entities/calendar/remote';
import { homeKeys } from './home.keys';

export const useTodoListQuery = {
  getTodoList: (date: string) =>
    queryOptions({
      queryKey: [homeKeys.TODO_LIST, date],
      queryFn: () => getTodoList(date),
    }),
};

export const useCategoryListQuery = {
  getCategoryList: () =>
    queryOptions({
      queryKey: [homeKeys.CATEGORY_LIST],
      queryFn: () => getCategory(),
    }),
};

export const useScheduleListQuery = {
  getScheduleList: (params: GetScheduleListReq) =>
    queryOptions({
      queryKey: [homeKeys.SCHEDULE_LIST],
      queryFn: () => getScheduleList(params),
    }),
};

export const useTipsQuery = {
  getTips: () =>
    queryOptions({
      queryKey: [homeKeys.TIPS],
      queryFn: () => getTips(),
    }),
};
