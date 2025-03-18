import { atom } from 'jotai';

export const userContext = atom({
  isSurvey: false,
  email: '',
  nickname: '',
  picture: '',
  notificationTime: '',
  isLoggedIn: false,
});

export default userContext;
