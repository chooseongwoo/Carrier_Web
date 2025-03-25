import { Schedule } from './type';

export interface GetScheduleListReq {
  startDate: string;
  endDate: string;
}

export interface GetScheduleListRes {
  dataList: Schedule[];
}

export interface GetTodoListReq {
  startDate: string;
  endDate: string;
}

export type PostScheduleReq = Omit<PatchScheduleReq, 'id'>;

export interface PatchScheduleReq {
  id: number;
  title: string;
  allDay: boolean;
  isRepeat: boolean;
  categoryId: number;
  startDate: string;
  endDate: string | null;
  location: string | null;
}

export interface PostTodoReq {
  title: string;
  date: string;
  isRepeat: boolean;
  priority: string;
  memo: string | null;
  location: string | null;
}
