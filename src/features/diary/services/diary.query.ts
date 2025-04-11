import { getDiary, getDiaryList, getSubject } from './diary.api.ts';
import { queryOptions } from '@tanstack/react-query';
import { diaryKeys } from './diary.keys.ts';

export const useDiaryQuery = {
  getDiaryList: (startDateTime: string, endDateTime: string) =>
    queryOptions({
      queryKey: [diaryKeys.DIARY_LIST, startDateTime, endDateTime],
      queryFn: () => getDiaryList({ startDateTime, endDateTime }),
    }),
  getDiary: (id: number) =>
    queryOptions({
      queryKey: [diaryKeys.DIARY, id],
      queryFn: () => (id ? getDiary(id) : Promise.resolve(null)),
    }),
  getSubject: (date: string) =>
    queryOptions({
      queryKey: [diaryKeys.DIARY_SUBJECT],
      queryFn: () => getSubject(date),
    }),
};
