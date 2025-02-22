import { useQuery } from '@tanstack/react-query';
import { PostScheduleListReq } from 'entities/calendar/remote';
import { postScheduleList } from './home.api';
import { scheduleKeys } from './home.keys';

export const useScheduleListQuery = (params: PostScheduleListReq) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [scheduleKeys.scheduleList, params],
    queryFn: () => postScheduleList(params),
  });

  return { data: data?.dataList, ...restQuery };
};
