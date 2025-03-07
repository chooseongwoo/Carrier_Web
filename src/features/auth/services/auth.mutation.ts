import { useMutation } from '@tanstack/react-query';
import { Storage } from 'shared/lib/storage';
import { TOKEN } from 'shared/constants';
import { postLogin } from './auth.api';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ accessToken, refreshToken, isSignUp }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      if (isSignUp) {
        window.location.href = '/survey';
      } else {
        window.location.href = '/';
      }
    },
  });
};
