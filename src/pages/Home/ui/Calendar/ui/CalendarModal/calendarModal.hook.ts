import { useState, useEffect } from 'react';
import {
  CalendarEvent,
  ScheduleCategory,
  TodoPriority,
  Schedule,
  Todo,
} from 'entities/calendar/type';

interface UseEventStateProps {
  event?: CalendarEvent;
}

const useEventState = ({ event }: UseEventStateProps) => {
  const [eventType, setEventType] = useState<'Schedule' | 'Todo'>(
    event?.type || 'Schedule'
  );
  const [title, setTitle] = useState(event?.title || '');
  const [content, setContent] = useState(event?.content || '');
  const [selectedRepeat, setSelectedRepeat] = useState<string>(
    event?.repeatCycle || 'NONE'
  );
  const [selectedCategory, setSelectedCategory] = useState<ScheduleCategory>(
    (event?.category as ScheduleCategory) || 'FIRST'
  );
  const [selectedPriority, setSelectedPriority] = useState<TodoPriority>(
    (event?.priority as TodoPriority) || 'MIDDLE'
  );
  const [isAllDay, setIsAllDay] = useState(
    eventType === 'Schedule' ? (event as Schedule)?.allDay || false : false
  );
  const [location, setLocation] = useState(event?.location || '');

  const isInitial = !event || event.title === '';

  useEffect(() => {
    if (event) {
      setEventType(event.type);
      setTitle(event.title);
      setContent(event.content || '');
      setSelectedRepeat(event.repeatCycle || 'NONE');
      setLocation(event.location || '');

      if (event.type === 'Schedule') {
        setSelectedCategory((event as Schedule).category);
        setIsAllDay((event as Schedule).allDay);
      } else {
        setSelectedPriority((event as Todo).priority);
      }
    }
  }, [event]);

  return {
    eventType,
    setEventType,
    title,
    setTitle,
    content,
    setContent,
    selectedRepeat,
    setSelectedRepeat,
    selectedCategory,
    setSelectedCategory,
    selectedPriority,
    setSelectedPriority,
    isAllDay,
    setIsAllDay,
    location,
    setLocation,
    isInitial,
  };
};

export default useEventState;
