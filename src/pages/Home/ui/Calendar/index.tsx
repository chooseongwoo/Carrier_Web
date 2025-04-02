import { useState, useRef, useEffect, useCallback, memo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  DatesSetArg,
  EventClickArg,
  CalendarApi,
  DayCellContentArg,
} from '@fullcalendar/core';
import { EventImpl } from '@fullcalendar/core/internal';
import { useQuery } from '@tanstack/react-query';
import { Arrow } from 'shared/icons';
import { CalendarPlusIcon, CalendarSearchIcon } from 'features/Home/ui';
import { CalendarModal, CalendarToggle } from 'features/Home/Calendar';
import { CalendarEvent, CategoryColor } from 'entities/calendar/type';
import * as s from './style.css';
import './root.css';
import {
  useScheduleListQuery,
  useTodoListQuery,
} from 'features/Home/services/home.query';
import { useAtom } from 'jotai';
import {
  scheduleSelectedAtom,
  todoSelectedAtom,
} from 'entities/calendar/contexts/eventDisplayState';
import { categoriesAtom } from 'entities/calendar/contexts/category';

const EventContent = memo(({ event }: { event: EventImpl }) => {
  const isSchedule = event.extendedProps.type === 'Schedule';
  const isDone = event.extendedProps.isDone === true;
  const [categoryData] = useAtom(categoriesAtom);

  const category = categoryData.find(
    (cat) => cat.id === event.extendedProps.category
  );
  const color = category ? category.color : 'BLUE';

  return (
    <div
      className={
        isSchedule
          ? s.calendarScheduleContainer[color as CategoryColor]
          : s.calendarTodoContainer
      }
    >
      <span
        className={
          isSchedule ? s.calendarScheduleText : s.calendarTodoText({ isDone })
        }
      >
        {event.title}
      </span>
    </div>
  );
});

const useCalendarNavigation = (calendarRef: React.RefObject<FullCalendar>) => {
  const [calendar, setCalendar] = useState<CalendarApi | null>(null);
  const [dateRange, setDateRange] = useState<{
    startDate: string;
    endDate: string;
  } | null>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const api = calendarRef.current.getApi();
      setCalendar(api);
      updateDateRange(api);
    }
  }, [calendarRef]);

  const updateDateRange = (api: CalendarApi) => {
    const view = api.view;
    const visibleStart = new Date(
      view.activeStart.getTime() + 1000 * 60 * 60 * 24
    );
    const visibleEnd = view.activeEnd;
    setDateRange({
      startDate: visibleStart.toISOString().split('T')[0] + 'T00:00:00',
      endDate: visibleEnd.toISOString().split('T')[0] + 'T23:59:59',
    });
  };

  const navigate = useCallback(
    (action: 'prev' | 'next' | 'today') => {
      if (calendar) {
        calendar[action]();
        updateDateRange(calendar);
      }
    },
    [calendar]
  );

  return { navigate, dateRange };
};

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggleVisible, setIsToggleVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    CalendarEvent | undefined
  >();
  const [currentDate, setCurrentDate] = useState({ year: 0, month: 0 });
  const calendarRef = useRef<FullCalendar | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const { navigate, dateRange } = useCalendarNavigation(calendarRef);

  const [scheduleSelected] = useAtom(scheduleSelectedAtom);
  const [todoSelected] = useAtom(todoSelectedAtom);

  const scheduleQuery = useScheduleListQuery.getScheduleList({
    startDate: dateRange?.startDate || '',
    endDate: dateRange?.endDate || '',
  });

  const todoQuery = useTodoListQuery.getTodoList({
    startDate: dateRange?.startDate || '',
    endDate: dateRange?.endDate || '',
  });

  const { data: schedules = [] } = useQuery({
    ...scheduleQuery,
    enabled: !!dateRange,
    staleTime: 1000 * 60 * 5,
  });

  const { data: todos = [] } = useQuery({
    ...todoQuery,
    enabled: !!dateRange,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (schedules.length > 0 || todos.length > 0) {
      setEvents([...schedules, ...todos]);
    }
  }, [schedules, todos]);

  const filteredEvents = events.filter((event) => {
    if (event.type === 'Schedule' && !scheduleSelected) return false;
    if (event.type === 'Todo' && !todoSelected) return false;
    return true;
  });

  const toggleCalendar = useCallback(
    () => setIsToggleVisible((prev) => !prev),
    []
  );
  const handleModalOpen = useCallback((event?: CalendarEvent) => {
    const startDate = event?.start ? new Date(event.start) : new Date();
    const endDate = event?.end ? new Date(event.end) : startDate;

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return;
    }
    setSelectedEvent({
      ...event,
      type: event?.type ?? 'Schedule',
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    } as CalendarEvent);

    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  }, []);

  const handleDateClick = useCallback(
    ({ date }: { date: Date }) => {
      handleModalOpen({
        type: 'Schedule',
        title: '',
        memo: '',
        start: date.toISOString(),
        end: date.toISOString(),
        startEditable: true,
        durationEditable: true,
        allDay: true,
        isRepeat: false,
        category: 1,
        location: null,
      });
    },
    [handleModalOpen]
  );

  const handleEventClick = useCallback(
    (info: EventClickArg) => {
      const { type, ...props } = info.event.extendedProps;

      handleModalOpen({
        eventId: props.eventId,
        title: info.event.title,
        start: info.event.startStr,
        end: info.event.endStr,
        startEditable: true,
        isRepeat: props.isRepeat,
        memo: props.memo,
        location: props.location,
        durationEditable: type === 'Schedule',
        allDay: info.event.allDay,
        category: type === 'Schedule' ? props.category : null,
        priority: type === 'Todo' ? props.priority : null,
        type,
      });
    },
    [handleModalOpen]
  );

  const handleDatesSet = ({ view }: DatesSetArg) => {
    setCurrentDate({
      year: view.currentStart.getFullYear(),
      month: view.currentStart.getMonth() + 1,
    });
  };

  return (
    <div className={s.calendarContainer}>
      <div className={s.calendarHeaderContainer}>
        <div className={s.calendarHeaderMain}>
          <div className={s.calendarHeaderPlusBtn} onClick={toggleCalendar}>
            <CalendarPlusIcon />
            {isToggleVisible && (
              <CalendarToggle onModalOpen={handleModalOpen} />
            )}
          </div>
          <div className={s.calendarHeaderSub}>
            <div className={s.calendarHeaderBtnLayout}>
              <Arrow
                direction="left"
                size={26}
                onClick={() => navigate('prev')}
              />
              <div
                className={s.calendarHeaderTodayBtn}
                onClick={() => navigate('today')}
              >
                오늘
              </div>
              <Arrow
                direction="right"
                size={26}
                onClick={() => navigate('next')}
              />
            </div>
            <div className={s.calendarTitle}>
              <span className={s.calendarTitleYear}>{currentDate.year}년</span>
              <span className={s.calendarTitleMonth}>
                {currentDate.month}월
              </span>
            </div>
          </div>
        </div>
        <div className={s.calendarSearchBar}>
          <CalendarSearchIcon />
          <input className={s.calendarSearchText} placeholder="검색" />
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ left: '', end: '' }}
        fixedWeekCount={false}
        height="calc(100% - 80px)"
        editable
        selectable
        locale="ko"
        timeZone="Asia/Seoul"
        datesSet={handleDatesSet}
        dayCellContent={({ dayNumberText }: DayCellContentArg) =>
          dayNumberText.replace('일', '')
        }
        titleFormat={{ year: 'numeric', month: 'long' }}
        eventContent={({ event }) => <EventContent event={event} />}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        dayMaxEvents={3}
        moreLinkText={(num) => `+${num}`}
        events={filteredEvents}
      />
      {isModalOpen && (
        <CalendarModal onClose={handleModalClose} event={selectedEvent} />
      )}
    </div>
  );
};

export default Calendar;
