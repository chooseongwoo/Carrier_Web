import { Suspense, useEffect, useState } from 'react';
import * as s from '../style.css';
import { useSearchParams } from 'react-router-dom';
import { useAppLoginMutation } from 'features/auth/services/auth.mutation';

const OAuthApp = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';

  const [responses, setRespones] = useState({
    accessToken: '',
    refreshToken: '',
    isSignUp: false,
  });

  const { mutate } = useAppLoginMutation();

  useEffect(() => {
    if (code)
      mutate(code, {
        onSuccess: (response) => {
          setRespones(response);
        },
      });
  }, [code, mutate]);

  const handleOpenApp = () => {
    const { accessToken, refreshToken, isSignUp } = responses;
    const params = new URLSearchParams({
      accessToken: accessToken,
      refreshToken: refreshToken,
      isSignUp: String(isSignUp),
    });
    window.location.href = `carrier://${isSignUp ? '/survey' : '/'}?${params.toString()}`;
  };

  return (
    <Suspense>
      <main className={s.container}>
        <button onClick={handleOpenApp}>앱으로 이동하기</button>
      </main>
    </Suspense>
  );
};

export default OAuthApp;
