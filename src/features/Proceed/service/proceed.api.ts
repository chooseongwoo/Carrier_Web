import { customAxios } from 'shared/api';

interface PostProceedParams {
  audioFile: File;
  time: string;
}

export const getProceed = async () => {
  const { data } = await customAxios.get('/meets');
  return data;
};

export const getAudio = async (audioSrc: string) => {
  const response = await customAxios.get(`/meets/audio/${audioSrc}`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'audio/webm',
    },
  });
  return response.data;
};

export const postProceed = async ({ audioFile, time }: PostProceedParams) => {
  const formData = new FormData();
  formData.append('file', audioFile);
  formData.append('time', time);

  const { data } = await customAxios.post('/meets', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
