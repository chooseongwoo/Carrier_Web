import { CalendarEvent } from './type';

export const events: CalendarEvent[] = [
  {
    start: '2025-02-09T14:00:00',
    end: '2025-02-12T14:00:00',
    title: '놀자fsdf',
    type: 'Schedule',
    repeatCycle: 'WEEKENDS',
    category: 'SECOND',
    allDay: true,
    startEditable: true,
    durationEditable: true,
  },
  {
    start: '2025-02-09T14:00:00',
    end: '2025-02-09T14:00:00',
    title: '공부하기',
    type: 'Todo',
    repeatCycle: 'WEEKENDS',
    category: 'SECOND',
    allDay: false,
    startEditable: true,
    durationEditable: true,
  },
];
