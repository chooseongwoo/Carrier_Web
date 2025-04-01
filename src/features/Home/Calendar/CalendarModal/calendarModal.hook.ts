import { useState, useEffect, useCallback, useRef } from 'react';
import { isEqual } from 'lodash';
import { CalendarEvent } from 'entities/calendar/type';
import { priority } from 'entities/calendar/model';
import {
  useCreateScheduleMutation,
  useCreateTodoMutation,
  useDeleteScheduleMutation,
  useDeleteTodoMutation,
  usePatchScheduleMutation,
  usePatchTodoMutation,
} from 'features/Home/services/home.mutation';

interface UseEventStateProps {
  event?: CalendarEvent;
}

interface EventState {
  eventType: 'Schedule' | 'Todo';
  title: string;
  memo: string | null;
  startDate: string;
  endDate: string | null;
  repeat: number;
  category: number;
  priority: number;
  isAllDay: boolean;
  location: string;
}

export const useEventState = ({ event }: UseEventStateProps) => {
  const [state, setState] = useState<EventState>({
    eventType: event?.type || 'Schedule',
    title: event?.title || '',
    memo: event?.memo || '',
    startDate: event?.start || '',
    endDate: event?.end || null,
    repeat: event?.isRepeat ? +event.isRepeat : 0,
    category: event?.type === 'Schedule' ? event.category || 1 : 1,
    priority: event?.type === 'Todo' ? event.priority || 1 : 1,
    isAllDay: event?.type === 'Schedule' ? event.allDay || false : false,
    location: event?.location || '',
  });

  const prevEventRef = useRef<CalendarEvent | undefined>(undefined);
  const isInitial = !event || event.title === '';

  const updateState = useCallback((updates: Partial<EventState>) => {
    setState((prev) => {
      if (isEqual(prev, { ...prev, ...updates })) return prev;
      return { ...prev, ...updates };
    });
  }, []);

  const switchEventType = useCallback(
    (type: 'Schedule' | 'Todo') => {
      updateState({
        eventType: type,
      });
    },
    [updateState]
  );

  const scheduleData = {
    title: state.title,
    memo: state.memo,
    allDay: state.isAllDay,
    isRepeat: Boolean(state.repeat),
    categoryId: state.category,
    startDate: state.startDate,
    endDate: Boolean(state.isAllDay) ? state.startDate : state.endDate,
    location: state.location,
  };

  const todoData = {
    title: state.title,
    date: state.endDate?.split('T')[0] || state.startDate.split('T')[0],
    isRepeat: Boolean(state.repeat),
    priority:
      priority.find((item) => item.id === state.priority)?.value || 'HIGH',
    memo: state.memo,
    location: state.location,
  };

  const { mutate: postScheduleMutate } = useCreateScheduleMutation();
  const { mutate: postTodoMutate } = useCreateTodoMutation();
  const { mutate: patchScheduleMutate } = usePatchScheduleMutation();
  const { mutate: patchTodoMutate } = usePatchTodoMutation();
  const { mutate: deleteScheduleMutate } = useDeleteScheduleMutation();
  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();

  const createEvent = useCallback(() => {
    if (state.eventType === 'Schedule') {
      postScheduleMutate(scheduleData);
    } else {
      postTodoMutate(todoData);
    }
  }, [
    postScheduleMutate,
    postTodoMutate,
    state.eventType,
    scheduleData,
    todoData,
  ]);

  const updateEvent = useCallback(() => {
    if (!event?.eventId || isInitial) return;
    if (state.eventType === 'Schedule') {
      patchScheduleMutate({
        id: event.eventId,
        ...scheduleData,
      });
    } else {
      patchTodoMutate({ id: event.eventId, ...todoData });
    }
  }, [
    event,
    state.eventType,
    patchScheduleMutate,
    patchTodoMutate,
    scheduleData,
    todoData,
  ]);

  const deleteEvent = useCallback(() => {
    if (!event?.eventId || isInitial) return;
    if (state.eventType === 'Schedule') {
      deleteScheduleMutate(event.eventId);
    } else {
      deleteTodoMutate(event.eventId);
    }
  }, [
    event,
    state.eventType,
    deleteScheduleMutate,
    deleteTodoMutate,
    scheduleData,
    todoData,
  ]);

  useEffect(() => {
    if (!event) return;

    if (!isEqual(prevEventRef.current, event)) {
      setState({
        eventType: event.type,
        title: event.title,
        memo: event.memo || null,
        startDate: event.start || '',
        endDate: event.end || null,
        repeat: +event.isRepeat,
        location: event.location || '',
        category: event.type === 'Schedule' ? event.category || 1 : 1,
        priority: event.type === 'Todo' ? event.priority || 1 : 1,
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
    updateEvent,
    deleteEvent,
  };
};

export const useInputHandlers = (updateState: (updates: any) => void) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (id: number, _value: string, name: string) => {
    updateState({ [name]: id });
  };

  const handleDateTimeChange = (
    name: 'startDate' | 'endDate',
    date: Date | null
  ) => {
    if (!date) return;
    updateState({ [name]: date.toISOString() });
  };

  return {
    handleInputChange,
    handleDropdownChange,
    handleDateTimeChange,
  };
};
