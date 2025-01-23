import {
  AppTitle,
  Google,
  Asterisk,
  Cube,
  MobiusStrip,
  Sphere,
} from 'pages/Login/ui';
import * as s from './style.css';

const Login = () => {
  return (
    <main className={s.container}>
      <img src={Asterisk} className={`${s.shape} ${s.Asterisk}`} />
      <img src={Cube} className={`${s.shape} ${s.Cube}`} />
      <img src={Sphere} className={`${s.shape} ${s.Sphere}`} />
      <img src={MobiusStrip} className={`${s.shape} ${s.MobiusStrip}`} />
      <div className={s.center}>
        <AppTitle />
        <p className={s.explain}>오늘의 작은 계획이 내일의 큰 꿈으로,</p>
        <div className={s.loginButton}>
          <Google />
          <p className={s.loginText}>구글 로그인</p>
        </div>
      </div>
    </main>
  );
};

export default Login;
