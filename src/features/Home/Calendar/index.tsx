import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DatesSetArg, DayCellContentArg } from '@fullcalendar/core';
import * as s from './style.css';
import theme from 'shared/styles/theme.css';
import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<{
    year: number;
    month: number;
  }>({
    year: 0,
    month: 0,
  });

  const [events, setEvents] = useState([
    {
      start: '2025-02-11',
      end: '2025-02-11',
      editable: false,
      startEditable: true,
      durationEditable: true,
      backgroundColor: theme.blue[600],
      borderColor: theme.blue[600],
      title: '놀자fsdf',
    },
    {
      start: '2025-02-11',
      end: '2025-02-11',
      editable: false,
      startEditable: true,
      durationEditable: true,
      backgroundColor: theme.blue[600],
      borderColor: theme.blue[600],
      title: '놀자fsdf',
    },
    {
      start: '2025-02-11',
      end: '2025-02-11',
      editable: false,
      startEditable: true,
      durationEditable: true,
      backgroundColor: theme.blue[600],
      borderColor: theme.blue[600],
      title: '놀자fsdf',
    },
    {
      start: '2025-02-11',
      end: '2025-02-11',
      editable: false,
      startEditable: true,
      durationEditable: true,
      backgroundColor: theme.blue[600],
      borderColor: theme.blue[600],
      title: '놀자fsdf',
    },
    {
      start: '2025-02-11',
      end: '2025-02-11',
      editable: false,
      startEditable: true,
      durationEditable: true,
      backgroundColor: theme.blue[600],
      borderColor: theme.blue[600],
      title: '놀자fsdf',
    },
  ]);

  const handleDayCellContent = (arg: DayCellContentArg) => {
    const dayNumber = arg.dayNumberText.replace('일', '');
    return dayNumber;
  };

  const handleDatesSet = (arg: DatesSetArg) => {
    const date = new Date(arg.view.currentStart);
    setCurrentDate({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    });
  };

  return (
    <div className={s.CalendarContainer}>
      {currentDate.year}년 {currentDate.month}월
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: '',
          end: '',
        }}
        height="100%"
        editable
        selectable
        locale="ko"
        datesSet={handleDatesSet}
        dayCellContent={handleDayCellContent}
        titleFormat={{ year: 'numeric', month: 'long' }}
        eventContent={(arg) =>
          0 ? (
            <div className={s.eventWrapper}>
              <div
                className={s.eventStick}
                style={{ background: theme.blue[600] }}
              />
              <span className={s.eventTitle} style={{ color: theme.white }}>
                {arg.event.title}
              </span>
            </div>
          ) : (
            <li>{arg.event.title}</li>
          )
        }
        dayMaxEvents={3}
        events={events}
        moreLinkText={(num) => `외 ${num}개의 일정`}
      />
    </div>
  );
};

export default Calendar;
