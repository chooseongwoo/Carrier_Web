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
