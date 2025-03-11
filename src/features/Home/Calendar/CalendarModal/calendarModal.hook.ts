import { useState, useEffect, useCallback, useRef } from 'react';
import { CalendarEvent } from 'entities/calendar/type';
import { priority } from 'entities/calendar/model';
import {
  usePostScheduleMutation,
  useCreateTodoMutation,
} from 'features/Home/services/home.mutation';
import { useAtom } from 'jotai';
import {
  todoRenderingAtom,
  scheduleRenderingAtom,
} from 'entities/calendar/contexts/eventRendering';

interface UseEventStateProps {
  event?: CalendarEvent;
}

interface EventState {
  eventType: 'Schedule' | 'Todo';
  title: string;
  memo: string | null;
  startDate: string;
  endDate: string | null;
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
    startDate: event?.start || '',
    endDate: event?.end || null,
    selectedRepeatId: 1,
    selectedCategoryId: event?.type === 'Schedule' ? event.category || 1 : 1,
    selectedPriorityId: event?.type === 'Todo' ? event.priority || 1 : 1,
    isAllDay: event?.type === 'Schedule' ? event.allDay || false : false,
    location: event?.location || '',
  });

  const prevEventRef = useRef<CalendarEvent | undefined>(undefined);
  const isInitial = !event || event.title === '';

  const [, setTodoRendering] = useAtom(todoRenderingAtom);
  const [, setScheduleRendering] = useAtom(scheduleRenderingAtom);

  const updateState = useCallback((updates: Partial<EventState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const switchEventType = useCallback(
    (type: 'Schedule' | 'Todo') => {
      updateState({
        eventType: type,
        ...(type === 'Schedule'
          ? {
              selectedCategoryId: 1,
              isAllDay: true,
              selectedPriorityId: 1,
            }
          : {
              selectedPriorityId: 1,
              isAllDay: false,
            }),
      });
    },
    [updateState]
  );

  const scheduleData = {
    title: state.title,
    memo: state.memo,
    allDay: state.isAllDay,
    isRepeat: false,
    categoryId: state.selectedCategoryId,
    startDate: state.startDate,
    endDate: state.endDate,
    location: state.location,
  };

  const todoData = {
    title: state.title,
    date: state.startDate.split('T')[0],
    isRepeat: false,
    priority:
      priority.find((item) => item.id === state.selectedPriorityId)?.value ||
      'HIGH',
    memo: state.memo ? state.memo : null,
    location: '임시 위치',
  };

  const { mutate: postScheduleMutate } = usePostScheduleMutation();
  const { mutate: postTodoMutate } = useCreateTodoMutation();

  const createEvent = useCallback(() => {
    if (state.eventType === 'Schedule') {
      postScheduleMutate(scheduleData);
      setTimeout(() => {
        setScheduleRendering((prev) => prev + 1);
      }, 1000);
    } else if (state.eventType === 'Todo') {
      postTodoMutate(todoData);
      setTimeout(() => {
        setTodoRendering((prev) => prev + 1);
      }, 1000);
    }
  }, [
    postScheduleMutate,
    postTodoMutate,
    state.eventType,
    scheduleData,
    todoData,
  ]);

  useEffect(() => {
    if (!event) return;

    const hasChanged = () => {
      const prev = prevEventRef.current;

      if (!prev) return true;

      return (
        prev.type !== event.type ||
        prev.title !== event.title ||
        prev.memo !== event.memo ||
        prev.start !== event.start ||
        prev.end !== event.end ||
        prev.location !== event.location ||
        prev.category !== event.category ||
        prev.priority !== event.priority ||
        prev.allDay !== event.allDay
      );
    };

    if (hasChanged()) {
      setState({
        eventType: event.type,
        title: event.title,
        memo: event.memo || null,
        startDate: event?.start || '',
        endDate: event?.end || null,
        selectedRepeatId: 1,
        location: event.location || '',
        selectedCategoryId: event.type === 'Schedule' ? event.category || 1 : 1,
        selectedPriorityId: event.type === 'Todo' ? event.priority || 1 : 1,
        isAllDay: event.type === 'Schedule' ? event.allDay || false : false,
      });

      prevEventRef.current = { ...event };
    }
  }, [event]);

  return {
    state,
    updateState,
    switchEventType,
    isInitial,
    createEvent,
  };
};

export default useEventState;
