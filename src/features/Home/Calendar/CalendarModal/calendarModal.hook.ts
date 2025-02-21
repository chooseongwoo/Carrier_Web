import { useState, useEffect, useCallback } from 'react';
import { CalendarEvent, Schedule, Todo } from 'entities/calendar/type';

interface UseEventStateProps {
  event?: CalendarEvent;
}

interface EventState {
  eventType: 'Schedule' | 'Todo';
  title: string;
  memo: string;
  selectedRepeatId: number;
  selectedCategoryId: number;
  selectedPriorityId: number;
  isAllDay: boolean;
  location: string;
}

const useEventState = ({ event }: UseEventStateProps) => {
  const [state, setState] = useState<EventState>({
    eventType: event?.type || 'Schedule',
    title: event?.title || '',
    memo: event?.memo || '',
    selectedRepeatId: 1,
    selectedCategoryId:
      event?.type === 'Schedule' ? (event as Schedule).category : 1,
    selectedPriorityId: event?.type === 'Todo' ? (event as Todo).priority : 1,
    isAllDay:
      event?.type === 'Schedule' ? (event as Schedule).allDay || false : false,
    location: event?.location || '',
  });

  const isInitial = !event || event.title === '';

  const updateState = useCallback((updates: Partial<EventState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const switchEventType = useCallback(
    (type: 'Schedule' | 'Todo') => {
      updateState({
        eventType: type,
        ...(type === 'Schedule'
          ? {
              selectedCategory: 1,
              isAllDay: true,
              selectedPriority: undefined,
            }
          : {
              selectedPriority: 'MIDDLE',
              isAllDay: false,
            }),
      });
    },
    [updateState]
  );

  useEffect(() => {
    if (event) {
      setState({
        eventType: event.type,
        title: event.title,
        memo: event.memo || '',
        selectedRepeatId: 1,
        location: event.location || '',
        selectedCategoryId:
          event.type === 'Schedule' ? (event as Schedule).category : 1,
        selectedPriorityId:
          event.type === 'Todo' ? (event as Todo).priority : 1,
        isAllDay:
          event.type === 'Schedule' ? (event as Schedule).allDay : false,
      });
    }
  }, [event]);

  return { state, updateState, switchEventType, isInitial };
};

export default useEventState;
