import { customAxios } from '../../../shared/api';

export const getDiaryList = async ({
  startDateTime,
  endDateTime,
}: {
  startDateTime: string;
  endDateTime: string;
}) => {
  const { data } = await customAxios.get(
    `/diaries?startDateTime=${startDateTime}&endDateTime=${endDateTime}`
  );
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
