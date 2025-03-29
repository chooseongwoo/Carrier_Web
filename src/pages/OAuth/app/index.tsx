import { Suspense, useEffect, useState } from 'react';
import * as s from './style.css';
import { useSearchParams } from 'react-router-dom';
import { useAppLoginMutation } from 'features/auth/services/auth.mutation';
import { userQuery } from 'features/user/services/user.query';
import { Storage } from 'shared/lib/storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { TOKEN } from 'shared/constants';

const OAuthApp = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';
  const { data: userInfo } = useQuery({
    ...userQuery.userInfo(),
    enabled: !!Storage.getItem(TOKEN.ACCESS),
  });
  const { mutate } = useAppLoginMutation();
  const queryClient = useQueryClient();

  const [responses, setRespones] = useState({
    accessToken: '',
    refreshToken: '',
    isSignUp: false,
  });

  useEffect(() => {
    if (code)
      mutate(code, {
        onSuccess: async (response) => {
          setRespones(response);
          Storage.setItem(TOKEN.ACCESS, response.accessToken);
          Storage.setItem(TOKEN.REFRESH, response.refreshToken);

          await queryClient.prefetchQuery(userQuery.userInfo());
        },
      });
  }, [code, mutate, queryClient]);

  const handleOpenApp = () => {
    const { accessToken, refreshToken, isSignUp } = responses;
    const params = new URLSearchParams({
      accessToken: accessToken,
      refreshToken: refreshToken,
      isSignUp: String(isSignUp),
    });
    window.location.href = `carrier://?${params.toString()}?route=${isSignUp ? '/survey' : '/'}`;
  };

  return (
    <Suspense>
      <main className={s.container}>
        <button onClick={handleOpenApp} className={s.toAppButton}>
          {userInfo?.email || ''} 으로 계속
        </button>
      </main>
    </Suspense>
  );
};

export default OAuthApp;
