import { useRef } from 'react';
import * as s from './style.css';

interface TimePickerProps {
  time: string[];
  onChange: (time: string[]) => void;
}

const TimePicker = ({ time, onChange }: TimePickerProps) => {
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
    onChange(newTime);

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

  return (
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
  );
};

export default TimePicker;
