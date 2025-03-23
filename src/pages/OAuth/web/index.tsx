import { Suspense, useEffect } from 'react';
import * as s from '../style.css';
import { useSearchParams } from 'react-router-dom';
import { useLoginMutation } from 'features/auth/services/auth.mutation';
import { DotLoader } from 'react-spinners';
import theme from 'shared/styles/theme.css';

const OAuthWeb = () => {
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
        <DotLoader color={theme.blue[500]} />
      </main>
    </Suspense>
  );
};

export default OAuthWeb;
