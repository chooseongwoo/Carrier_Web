import { customAxios } from 'shared/api';

export const getMailList = async () => {
  const { data } = await customAxios.get('/mails');
  return data;
};

export const postMailsBatchSave = async () => {
  const { data } = await customAxios.post('/mails');
  return data;
};

export const patchMails = async () => {
  const { data } = await customAxios.patch('/mails');
  return data;
};

export const getMailDetail = async (gmailId: string) => {
  const { data } = await customAxios.get(`/mails/${gmailId}`);
  return data;
};
