import { queryOptions } from '@tanstack/react-query';
import { getCategory, getTodoList, getScheduleList, getTips } from './home.api';
import { GetScheduleListReq, GetTodoListReq } from 'entities/calendar/remote';
import { homeKeys } from './home.keys';

export const useTodoListQuery = {
  getTodoList: (params: GetTodoListReq) =>
    queryOptions({
      queryKey: [homeKeys.TODO_LIST, params],
      queryFn: () => getTodoList(params),
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
