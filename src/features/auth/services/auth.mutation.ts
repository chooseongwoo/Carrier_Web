import { useMutation } from '@tanstack/react-query';
import { Storage } from 'shared/lib/storage';
import { TOKEN } from 'shared/constants';
import { postLogin } from './auth.api';
import { useNavigate } from 'react-router-dom';

/* eslint-disable no-console */

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ accessToken, refreshToken }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      console.error('로그인 중 에러 발생:', accessToken);
      navigate('/');
    },
    onError: (error) => {
      console.error('로그인 중 에러 발생:', error);
    },
  });
};
