import { useState } from 'react';
import { LeftArrow, RightArrow } from 'shared/icons';
import * as s from './style.css';

const MiniCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(
    new Date().getDate()
  );

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const startWeek = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const prevEndOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  const renderDays = () => {
    const days = [];

    for (let i = startWeek - 1; i >= 0; i--) {
      const isSunday = (startWeek - i - 1) % 7 === 0;
      days.push(
        <div
          key={`prev-${i}`}
          className={s.MiNiCalenadrEmptyDay}
          style={{
            color:
              isSunday && selectedDate !== prevEndOfMonth - i
                ? 'red'
                : undefined,
          }}
        >
          {prevEndOfMonth - i}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSunday = (startWeek + i - 1) % 7 === 0;
      days.push(
        <div
          key={`day-${i}`}
          className={`${s.MiniCalendarDay} ${
            selectedDate === i ? s.MiniCalendarSelectedDay : ''
          }`}
          style={{
            color: isSunday && selectedDate !== i ? 'red' : undefined,
          }}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    const remainingDays = 7 - ((startWeek + daysInMonth) % 7 || 7);
    for (let i = 1; i <= remainingDays; i++) {
      const isSunday = (startWeek + daysInMonth + i - 1) % 7 === 0;
      days.push(
        <div
          key={`next-${i}`}
          className={s.MiNiCalenadrEmptyDay}
          style={{ color: isSunday && selectedDate !== i ? 'red' : undefined }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={s.MiniCalendarContainer}>
      <div className={s.MiniCalendarHeader}>
        <button onClick={handlePrevMonth}>
          <LeftArrow />
        </button>
        <div className={s.MiniCalenadrTitle}>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </div>
        <button onClick={handleNextMonth}>
          <RightArrow />
        </button>
      </div>
      <div className={s.MiniCalendarGrid}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <div
            key={`week-${index}`}
            className={s.MiniCalenadrWeek}
            style={{ color: index === 0 ? 'red' : undefined }}
          >
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default MiniCalendar;
