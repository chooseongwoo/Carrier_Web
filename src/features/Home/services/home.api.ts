import { customAxios } from 'shared/api';
import { authorization } from 'shared/api/header';
import {
  PostScheduleListReq,
  GetScheduleListRes,
} from 'entities/calendar/remote';

export const postScheduleList = async (params: PostScheduleListReq) => {
  const { data } = await customAxios.post<GetScheduleListRes>(
    '/schedule',
    params,
    authorization()
  );
  return data;
};
