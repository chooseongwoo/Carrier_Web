import { Suspense, useEffect } from 'react';
import * as s from './style.css';
import { useSearchParams } from 'react-router-dom';
import { useLoginMutation } from 'features/auth/services/auth.mutation';

const OAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';
  const { mutate } = useLoginMutation();

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code, mutate]);

  return (
    <Suspense>
      <main className={s.container}>
        <p className={s.loginText}>로그인 중...</p>
      </main>
    </Suspense>
  );
};

export default OAuth;
