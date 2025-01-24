import { useState, useMemo } from 'react';
import {
  LandingAsterisk,
  LandingCube,
  LandingMobiusStrip,
  LandingSphere,
} from 'shared/icons';
import TimePicker from 'shared/components/TimePicker';
import * as s from './style.css';
import Arrow from './ui/Arrow';

const Survey = () => {
  const [time, setTime] = useState(['', '', '', '']);

  const isTimeValid = useMemo(() => {
    return (
      time.every((value) => value !== '') &&
      parseInt(time[0] + time[1]) <= 23 &&
      parseInt(time[2] + time[3]) <= 59
    );
  }, [time]);

  return (
    <main className={s.container}>
      <img src={LandingAsterisk} className={`${s.shape} ${s.Asterisk}`} />
      <img src={LandingCube} className={`${s.shape} ${s.Cube}`} />
      <img src={LandingSphere} className={`${s.shape} ${s.Sphere}`} />
      <img src={LandingMobiusStrip} className={`${s.shape} ${s.MobiusStrip}`} />
      <div className={s.center}>
        <div className={s.skipButton}>
          건너뛰기
          <Arrow />
        </div>
        <div className={s.title}>
          당일 일정 요약 알림을 받는 시간대는 언제가 편하신가요?
        </div>
        <div className={s.subTitle}>
          * 등록된 시간은 사용자 설정에서 언제든지 변경할 수 있습니다.
        </div>
        <TimePicker time={time} onChange={setTime} />
        <button className={s.nextButton} disabled={!isTimeValid}>
          확정하고 시작하기
        </button>
      </div>
    </main>
  );
};

export default Survey;
