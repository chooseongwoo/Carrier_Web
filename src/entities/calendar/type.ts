export const EVENT_TYPE = {
  Schedule: 'Schedule',
  Todo: 'Todo',
} as const;

export type CategoryColor =
  | 'RED'
  | 'GREEN'
  | 'BLUE'
  | 'PURPLE'
  | 'BROWN'
  | 'ROSE';

export type EventType = (typeof EVENT_TYPE)[keyof typeof EVENT_TYPE];

export interface Category {
  id: number;
  name: string;
  color: CategoryColor;
  active: boolean;
}

export interface CalendarEvent {
  type: EventType;
  eventId?: number;
  title: string;
  memo: string | null;
  startDate?: string;
  endDate?: string;
  isRepeat: boolean;
  location?: string | null;
  isAllDay?: boolean;
  category?: number;
  priority?: number;
  isDone?: boolean;

  start: string;
  end: string;
  startEditable?: boolean;
  durationEditable?: boolean;
  allDay?: boolean;
}

export interface Schedule {
  id: number;
  title: string;
  memo: string | null;
  allDay: boolean;
  isRepeat: boolean;
  startDate: string;
  endDate: string | null;
  category: Category;
  location: string;
}

export interface Todo {
  title: string;
  id: number;
  memo: string | null;
  location: string | null;
  priority: string;
  isDone: boolean;
  date: string;
}
