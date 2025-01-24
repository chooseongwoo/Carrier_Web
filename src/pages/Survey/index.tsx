import { useRef, useState, useMemo } from 'react';
import {
  LandingAsterisk,
  LandingCube,
  LandingMobiusStrip,
  LandingSphere,
} from 'shared/icons';
import * as s from './style.css';
import Arrow from './ui/Arrow';

const Survey = () => {
  const [time, setTime] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleTimeChange = (value: string, index: number) => {
    const newValue = value.slice(-1);
    const newTime = [...time];

    if (index === 0 && parseInt(newValue) > 2) return;
    if (index === 1 && parseInt(time[0] + newValue) > 23) return;
    if (index === 2 && parseInt(newValue) > 5) return;
    if (index === 3 && parseInt(newValue) > 9) return;

    newTime[index] = newValue;
    setTime(newTime);

    if (newValue !== '' && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && time[index] === '' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

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
        <div className={s.timeInputContainer}>
          {[0, 1].map((index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="number"
              value={time[index]}
              onChange={(e) => handleTimeChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={s.timeInput}
              placeholder="0"
            />
          ))}
          :
          {[2, 3].map((index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="number"
              value={time[index]}
              onChange={(e) => handleTimeChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={s.timeInput}
              placeholder="0"
            />
          ))}
        </div>
        <button className={s.nextButton} disabled={!isTimeValid}>
          확정하고 시작하기
        </button>
      </div>
    </main>
  );
};

export default Survey;
