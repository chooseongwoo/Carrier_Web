import { customAxios } from 'shared/api';
import { toQueryString } from 'shared/lib/queryString';

export interface DiaryListReq {
  startDateTime: string;
  endDateTime: string;
}

export const getDiaryList = async (params: DiaryListReq) => {
  const { data } = await customAxios.get(`/diaries?${toQueryString(params)}`);
  return data;
};

export const postDiary = async (diaryData: {
  title: string;
  content: string;
  emoji: string;
}) => {
  const { data } = await customAxios.post('/diaries', diaryData);
  return data;
};

export const getDiary = async (id: number) => {
  const { data } = await customAxios.get(`/diaries/${id}`);
  return data;
};

export const deleteDiary = async (diaryId: string) => {
  const { data } = await customAxios.delete(`/diaries/${diaryId}`);
  return data;
};

export const getSubject = async (date: string) => {
  const { data } = await customAxios.get(
    `/diaries/recommend?${toQueryString({ date })}`
  );
  return data;
};
