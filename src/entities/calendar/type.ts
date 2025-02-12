export type EventType = 'Schedule' | 'Todo';

export type ScheduleRepeat =
  | 'NONE'
  | 'DAILY'
  | 'WEEKDAYS'
  | 'WEEKENDS'
  | 'MONTHLY';

export type ScheduleCategory = 'FIRST' | 'SECOND' | 'THIRD';

export type TodoRepeat =
  | 'NONE'
  | 'DAILY'
  | 'WEEKDAYS'
  | 'WEEKENDS'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'SEMIANNUALLY'
  | 'ANNUALLY';

export type TodoPriority = 'LOW' | 'MIDDLE' | 'HIGH';

export interface CalendarEvent {
  type: EventType;
  title: string;
  start: string;
  end: string;
  startEditable: boolean;
  durationEditable: boolean;
  content?: string;
  location?: string;
  repeatCycle?: string;
  category?: string;
  allDay?: boolean;
  priority?: string;
}

export interface Schedule extends CalendarEvent {
  type: 'Schedule';
  title: string;
  content?: string;
  start: string;
  end: string;
  startEditable: true;
  durationEditable: true;
  allDay: boolean;
  startTime?: string;
  endTime?: string;
  repeatCycle: ScheduleRepeat;
  category: ScheduleCategory;
  location?: string;
}

export interface Todo extends CalendarEvent {
  type: 'Todo';
  title: string;
  content?: string;
  start: string;
  end: string;
  startEditable: true;
  durationEditable: false;
  repeatCycle: TodoRepeat;
  priority: TodoPriority;
  location?: string;
}
