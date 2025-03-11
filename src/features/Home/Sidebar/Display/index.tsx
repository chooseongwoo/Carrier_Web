import { useAtom } from 'jotai';
import {
  scheduleSelectedAtom,
  todoSelectedAtom,
} from 'entities/calendar/contexts/eventDisplayState';
import * as s from './style.css';

const Display = () => {
  const [scheduleSelected, setScheduleSelected] = useAtom(scheduleSelectedAtom);
  const [todoSelected, setTodoSelected] = useAtom(todoSelectedAtom);

  const toggleScheduleSelected = () => {
    setScheduleSelected((prev) => !prev);
  };

  const toggleTodoSelected = () => {
    setTodoSelected((prev) => !prev);
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
