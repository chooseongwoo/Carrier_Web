import { getDiary, getDiaryList } from './diary.api.ts';
import { queryOptions } from '@tanstack/react-query';
import { diaryKeys } from './diary.keys.ts';

export const useDiaryQuery = {
  getDiaryList: (startDateTime: string, endDateTime: string) =>
    queryOptions({
      queryKey: [diaryKeys.DIARY_LIST],
      queryFn: () => getDiaryList({ startDateTime, endDateTime }),
    }),
  getDiary: (id: number) =>
    queryOptions({
      queryKey: [diaryKeys.DiARY],
      queryFn: () => getDiary(id),
    }),
};
