import { CalendarSchedule, CalendarTodo } from './ui';
import { CalendarEvent } from 'entities/calendar/type';
import * as s from './style.css';
import useCreateNewEvent from './calendarToggle.hook';

interface CalendarToggleProps {
  onModalOpen: (event?: CalendarEvent) => void;
}

const CalendarToggle: React.FC<CalendarToggleProps> = ({ onModalOpen }) => {
  const createNewEvent = useCreateNewEvent();

  const handleClick = (type: 'Schedule' | 'Todo') => {
    const newEvent = createNewEvent(type);
    onModalOpen(newEvent);
  };

  return (
    <div className={s.calendarToggle}>
      <button
        className={s.calendarToggleMain}
        onClick={() => handleClick('Schedule')}
      >
        <CalendarSchedule />
        <div className={s.calendarToggleText}>일정 생성</div>
      </button>
      <button
        className={s.calendarToggleMain}
        onClick={() => handleClick('Todo')}
      >
        <CalendarTodo />
        <div className={s.calendarToggleText}>할 일 생성</div>
      </button>
    </div>
  );
};

export default CalendarToggle;
