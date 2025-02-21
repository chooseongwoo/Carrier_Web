export const EVENT_TYPE = {
  Schedule: 'Schedule',
  Todo: 'Todo',
} as const;

export type EventType = (typeof EVENT_TYPE)[keyof typeof EVENT_TYPE];

export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface CalendarEvent {
  type: EventType;
  title: string;
  memo?: string;
  isRepeat: boolean;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  allDay?: boolean;
  category?: number;
  priority?: number;
  startEditable: boolean;
  durationEditable: boolean;
}

export interface Todo extends CalendarEvent {
  type: 'Todo';
  priority: number;
  startEditable: true;
  durationEditable: false;
}

export interface Schedule extends CalendarEvent {
  type: 'Schedule';
  allDay: boolean;
  category: number;
  startEditable: true;
  durationEditable: true;
}
