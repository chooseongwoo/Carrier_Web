import { getDiaryList } from './diary.api.ts';
import { queryOptions } from '@tanstack/react-query';
import { diaryKeys } from './diary.keys.ts';

export const useDiaryListQuery = {
  getDiaryList: (startDateTime: string, endDateTime: string) =>
    queryOptions({
      queryKey: [diaryKeys.DIARY_LIST, startDateTime, endDateTime],
      queryFn: () => getDiaryList({ startDateTime, endDateTime }),
    }),
};
