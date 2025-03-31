import { customAxios } from 'shared/api';

interface PostProceedParams {
  audioBlob: Blob;
  time: string;
}

export const postProceed = async ({ audioBlob, time }: PostProceedParams) => {
  const formData = new FormData();
  formData.append('file', audioBlob);
  formData.append('time', time);

  const { data } = await customAxios.post('/meets', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
