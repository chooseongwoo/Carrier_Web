import { useState, useEffect, useCallback, useRef } from 'react';
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
  category: number;
  selectedPriorityId: number;
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
    selectedRepeatId: 1,
    category: event?.type === 'Schedule' ? event.category || 1 : 1,
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
      });
    },
    [updateState]
  );

  const scheduleData = {
    title: state.title,
    memo: state.memo,
    allDay: state.isAllDay,
    isRepeat: false,
    categoryId: state.category,
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
    memo: state.memo || null,
    location: '임시 위치',
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
      setTimeout(() => setScheduleRendering((prev) => prev + 1), 100);
    } else {
      postTodoMutate(todoData);
      setTimeout(() => setTodoRendering((prev) => prev + 1), 100);
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

      setTimeout(() => setScheduleRendering((prev) => prev + 1), 100);
    } else {
      patchTodoMutate({ id: event.eventId, ...todoData });
      setTimeout(() => setTodoRendering((prev) => prev + 1), 100);
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
      setTimeout(() => setScheduleRendering((prev) => prev + 1), 100);
    } else {
      deleteTodoMutate(event.eventId);
      setTimeout(() => setTodoRendering((prev) => prev + 1), 100);
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

    if (
      prevEventRef.current?.title !== event.title ||
      prevEventRef.current?.start !== event.start ||
      prevEventRef.current?.end !== event.end
    ) {
      setState({
        eventType: event.type,
        title: event.title,
        memo: event.memo || null,
        startDate: event.start || '',
        endDate: event.end || null,
        selectedRepeatId: 1,
        location: event.location || '',
        category: event.type === 'Schedule' ? event.category || 1 : 1,
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
    updateEvent,
    deleteEvent,
  };
};

export const useInputHandlers = (updateState: (updates: any) => void) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ [e.target.name]: e.target.value });
  };

  return {
    handleInputChange,
  };
};
