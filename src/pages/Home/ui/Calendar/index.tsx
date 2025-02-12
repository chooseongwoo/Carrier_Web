import { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  DatesSetArg,
  DayCellContentArg,
  EventClickArg,
  CalendarApi,
} from '@fullcalendar/core';
import { Arrow } from 'shared/icons';
import {
  CalendarPlus,
  CalendarSearch,
  CalendarModal,
  CalendarToggle,
} from './ui';
import { events } from 'entities/calendar/model';
import { Schedule, Todo, CalendarEvent } from 'entities/calendar/type';
import * as s from './style.css';
import './root.css';
import theme from 'shared/styles/theme.css';

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggleVisible, setIsToggleVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    CalendarEvent | undefined
  >();
  const [currentDate, setCurrentDate] = useState({ year: 0, month: 0 });
  const [calendar, setCalendar] = useState<CalendarApi | null>(null);
  const calendarRef = useRef<FullCalendar | null>(null);

  const toggleCalendar = () => setIsToggleVisible((prev) => !prev);

  const handleModalOpen = (event?: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  };

  const handleDateClick = ({ date }: { date: Date }) => {
    const newEvent: Schedule = {
      type: 'Schedule',
      title: '',
      start: date.toISOString(),
      end: date.toISOString(),
      startEditable: true,
      durationEditable: true,
      allDay: true,
      repeatCycle: 'NONE',
      category: 'FIRST',
    };
    handleModalOpen(newEvent);
  };

  const handleEventClick = (info: EventClickArg) => {
    const clickedEvent = info.event;
    const { type, ...props } = clickedEvent.extendedProps;

    if (type === 'Schedule') {
      const scheduleEvent: Schedule = {
        type: 'Schedule',
        title: clickedEvent.title,
        start: clickedEvent.startStr,
        end: clickedEvent.endStr,
        startEditable: true,
        durationEditable: true,
        allDay: clickedEvent.allDay,
        repeatCycle: props.repeatCycle || 'NONE',
        category: props.category || 'FIRST',
        content: props.content,
        location: props.location,
      };
      handleModalOpen(scheduleEvent);
    } else {
      const todoEvent: Todo = {
        type: 'Todo',
        title: clickedEvent.title,
        start: clickedEvent.startStr,
        end: clickedEvent.endStr,
        startEditable: true,
        durationEditable: false,
        repeatCycle: props.repeatCycle || 'NONE',
        priority: props.priority || 'MIDDLE',
        content: props.content,
        location: props.location,
      };
      handleModalOpen(todoEvent);
    }
  };

  const handleDatesSet = ({ view }: DatesSetArg) => {
    const date = new Date(view.currentStart);
    setCurrentDate({ year: date.getFullYear(), month: date.getMonth() + 1 });
  };

  const handlePrevMonth = () => {
    if (calendar !== null) calendar.prev();
  };

  const handleNextMonth = () => {
    if (calendar !== null) calendar.next();
  };

  const handlePresentMonth = () => {
    if (calendar !== null) calendar.today();
  };

  useEffect(() => {
    if (calendarRef.current) {
      setCalendar(calendarRef.current.getApi());
    }
  }, []);

  return (
    <div className={s.calendarContainer}>
      <div className={s.calendarHeaderContainer}>
        <div className={s.calendarHeaderMain}>
          <div className={s.calendarHeaderPlusBtn} onClick={toggleCalendar}>
            <CalendarPlus />
            {isToggleVisible && (
              <CalendarToggle onModalOpen={handleModalOpen} />
            )}
          </div>
          <div className={s.calendarHeaderSub}>
            <div className={s.calendarHeaderBtnLayout}>
              <Arrow direction="left" size={26} onClick={handlePrevMonth} />
              <div
                className={s.calendarHeaderTodayBtn}
                onClick={handlePresentMonth}
              >
                오늘
              </div>
              <Arrow direction="right" size={26} onClick={handleNextMonth} />
            </div>
            <span className={s.calendarTitleYear}>{currentDate.year}년</span>
            <span className={s.calendarTitleMonth}>{currentDate.month}월</span>
          </div>
        </div>
        <div className={s.calendarSearchBar}>
          <CalendarSearch />
          <input className={s.calendarSearchText} placeholder="검색" />
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ left: '', end: '' }}
        fixedWeekCount={false}
        height="100%"
        dayMaxEventRows={true}
        expandRows={true}
        editable
        selectable
        locale="ko"
        datesSet={handleDatesSet}
        dayCellContent={({ dayNumberText }: DayCellContentArg) =>
          dayNumberText.replace('일', '')
        }
        titleFormat={{ year: 'numeric', month: 'long' }}
        eventContent={({ event }) => (
          <div
            className={
              event.extendedProps.type === 'Schedule'
                ? s.calendarScheduleContainer
                : s.calendarTodoContainer
            }
          >
            <span
              className={
                event.extendedProps.type === 'Schedule'
                  ? s.calendarScheduleText
                  : s.calendarTodoText
              }
              style={{
                color:
                  event.extendedProps.type === 'Schedule'
                    ? theme.blue[500]
                    : theme.black,
              }}
            >
              {event.title}
            </span>
          </div>
        )}
        dayMaxEvents={3}
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        moreLinkText={(num) => `+${num}`}
      />
      {isModalOpen && (
        <CalendarModal onClose={handleModalClose} event={selectedEvent} />
      )}
    </div>
  );
};

export default Calendar;
