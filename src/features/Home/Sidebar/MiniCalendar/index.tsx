/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { Arrow } from 'shared/icons';
import * as s from './style.css';
import { todoSelectedDateAtom } from 'entities/calendar/contexts/todoDate';
import { useAtom } from 'jotai';
import { formatDateToPeriod, parseDateString } from 'shared/lib/date';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

const MiniCalendar = () => {
  const [dateString, setDateString] = useAtom(todoSelectedDateAtom);
  const currentDate = useMemo(() => parseDateString(dateString), [dateString]);
  const [selectedDate, setSelectedDate] = useState<number | null>(
    currentDate.getDate()
  );

  useEffect(() => {
    setSelectedDate(currentDate.getDate());
  }, [currentDate]);

  const { startWeek, daysInMonth, prevEndOfMonth } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);
    const prevEndOfMonthDate = new Date(year, month, 0);

    return {
      startWeek: startOfMonth.getDay(),
      daysInMonth: endOfMonth.getDate(),
      prevEndOfMonth: prevEndOfMonthDate.getDate(),
    };
  }, [currentDate]);

  const updateDate = (newDate: Date) => {
    setDateString(formatDateToPeriod(newDate));
    setSelectedDate(newDate.getDate());
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(1);
    updateDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(1);
    updateDate(newDate);
  };

  const handleDateClick = (day: number, type: 'prev' | 'next' | 'day') => {
    const newDate = new Date(currentDate);
    if (type === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
      newDate.setDate(day);
    } else if (type === 'next') {
      newDate.setMonth(newDate.getMonth() + 1);
      newDate.setDate(day);
    } else if (type === 'day') {
      newDate.setDate(day);
    }

    updateDate(newDate);
  };

  const renderDays = useMemo(() => {
    const days = [];

    for (let i = startWeek - 1; i >= 0; i--) {
      const isSunday = (startWeek - i - 1) % 7 === 0;
      days.push(
        <div
          key={`prev-${i}`}
          className={s.miniCalendarDay({ isEmpty: true })}
          style={{
            color:
              isSunday && selectedDate !== prevEndOfMonth - i
                ? 'red'
                : undefined,
          }}
          onClick={() => handleDateClick(prevEndOfMonth - i, 'prev')}
        >
          {prevEndOfMonth - i}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSunday = (startWeek + i - 1) % 7 === 0;
      const isSelected = selectedDate === i;
      days.push(
        <div
          key={`day-${i}`}
          className={s.miniCalendarDay({ selected: isSelected })}
          style={{
            color: isSunday && selectedDate !== i ? 'red' : undefined,
          }}
          onClick={() => handleDateClick(i, 'day')}
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
          className={s.miniCalendarDay({ isEmpty: true })}
          style={{ color: isSunday && selectedDate !== i ? 'red' : undefined }}
          onClick={() => handleDateClick(i, 'next')}
        >
          {i}
        </div>
      );
    }

    return days;
  }, [startWeek, daysInMonth, prevEndOfMonth, selectedDate]);

  return (
    <div className={s.miniCalendarContainer}>
      <div className={s.miniCalendarHeader}>
        <button onClick={handlePrevMonth}>
          <Arrow direction="left" />
        </button>
        <div className={s.miniCalendarTitle}>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </div>
        <button onClick={handleNextMonth}>
          <Arrow direction="right" />
        </button>
      </div>
      <div className={s.miniCalendarGrid}>
        {WEEKDAYS.map((day, index) => (
          <div
            key={`week-${index}`}
            className={s.miniCalendarWeek}
            style={{ color: index === 0 ? 'red' : undefined }}
          >
            {day}
          </div>
        ))}
        {renderDays}
      </div>
    </div>
  );
};

export default MiniCalendar;
