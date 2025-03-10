import { useState } from 'react';
import * as s from './style.css';

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
    <div className={s.displayContainer}>
      <div className={s.displayObject}>
        <div className={s.displayTitle}>일정 표시</div>
        <div
          className={s.displayBtnLayout({ isActive: scheduleSelected })}
          onClick={toggleScheduleSelected}
        >
          <div className={s.displayBtnObject}></div>
        </div>
      </div>
      <div className={s.displayObject}>
        <div className={s.displayTitle}>할 일 표시</div>
        <div
          className={s.displayBtnLayout({ isActive: todoSelected })}
          onClick={toggleTodoSelected}
        >
          <div className={s.displayBtnObject}></div>
        </div>
      </div>
    </div>
  );
};

export default Display;
