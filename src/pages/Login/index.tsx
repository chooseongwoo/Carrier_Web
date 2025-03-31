import { AppTitle, Google } from 'pages/Login/ui';
import * as s from './style.css';
import {
  LandingAsterisk,
  LandingCube,
  LandingMobiusStrip,
  LandingSphere,
} from 'shared/icons';
import { authQuery } from 'features/auth/services/auth.query';
import { useQueryClient } from '@tanstack/react-query';
import { Storage } from 'shared/lib/storage';
import { isElectron } from 'shared/lib/isElectron';
import Download from 'pages/Login/ui/Download';
import { getDownloadUrl } from 'pages/Login/utils/getDownloadUrl';

const Login = () => {
  const queryClient = useQueryClient();

  const handleLogin = async () => {
    try {
      Storage.clear();

      const isInApp = isElectron();
      const redirect = isInApp
        ? import.meta.env.VITE_APPLICATION_REDIRECT_APP
        : import.meta.env.VITE_APPLICATION_REDIRECT;

      const url = await queryClient.fetchQuery(authQuery.loginLink());

      if (!url) {
        /* eslint-disable no-console */
        console.error('로그인 링크를 찾을 수 없습니다.');
        return;
      }

      const finalUrl = `${url}${redirect}`;

      isInApp
        ? window.electron.openExternal(finalUrl)
        : (window.location.href = finalUrl);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const handleDownload = () => {
    const url = getDownloadUrl();
    if (!url) {
      alert('현재 OS는 지원하지 않습니다.');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={s.container}>
      <img src={LandingAsterisk} className={`${s.shape} ${s.Asterisk}`} />
      <img src={LandingCube} className={`${s.shape} ${s.Cube}`} />
      <img src={LandingSphere} className={`${s.shape} ${s.Sphere}`} />
      <img src={LandingMobiusStrip} className={`${s.shape} ${s.MobiusStrip}`} />
      <div className={s.center}>
        <AppTitle />
        <p className={s.explain}>오늘의 작은 계획이 내일의 큰 꿈으로,</p>
        <div className={s.buttons}>
          <div
            className={s.loginButton({ type: 'login' })}
            onClick={handleLogin}
          >
            <Google />
            <p className={s.buttonText({ type: 'login' })}>구글 로그인</p>
          </div>
          {!isElectron() && (
            <div
              className={s.loginButton({ type: 'download' })}
              onClick={handleDownload}
            >
              <Download />
              <p className={s.buttonText({ type: 'download' })}>
                앱으로 다운로드
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;
