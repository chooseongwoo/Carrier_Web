import { CalendarEvent, Category } from './type';

export const events: CalendarEvent[] = [
  {
    startDate: '2025-02-09T14:00:00',
    endDate: '2025-02-12T14:00:00',
    title: '놀자fsdf',
    type: 'Schedule',
    isRepeat: false,
    category: 2,
    allDay: true,
    location: null,
    startEditable: true,
    durationEditable: true,
  },
  {
    startDate: '2025-02-09T14:00:00',
    title: '공부하기',
    type: 'Todo',
    isRepeat: false,
    priority: 1,
    memo: 'adafsdfadfa',
    location: null,
    startEditable: true,
    durationEditable: false,
  },
];

export const categorys: Category[] = [
  { id: 1, name: '나의 일정', color: '#3B82F6' },
  { id: 2, name: '게임', color: '#22C55E' },
  { id: 3, name: '공휴일', color: '#EF4444' },
];
