import * as s from './style.css';
import { BtnDisplay } from 'shared/icons';
import { useState } from 'react';

const Display = () => {
  const [scheduleSelected, setScheduleSelected] = useState(false);
  const [todoSelected, setTodoSelected] = useState(false);

  const toggleScheduleSelected = () => {
    setScheduleSelected((prevSelected) => !prevSelected);
  };

  const toggleTodoSelected = () => {
    setTodoSelected((prevSelected) => !prevSelected);
  };

  return (
    <div className={s.DisplayContainer}>
      <div className={s.DisplayObject}>
        <div className={s.DisplayTitle}>일정 표시</div>
        <BtnDisplay
          selected={scheduleSelected}
          onClick={toggleScheduleSelected}
        />
      </div>
      <div className={s.DisplayObject}>
        <div className={s.DisplayTitle}>할 일 표시</div>
        <BtnDisplay selected={todoSelected} onClick={toggleTodoSelected} />
      </div>
    </div>
  );
};

export default Display;
