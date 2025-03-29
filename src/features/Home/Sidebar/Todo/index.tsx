import { useEffect, useState } from 'react';
import { Arrow } from 'shared/icons';
import { TodoNormalIcon, TodoCheckedIcon } from 'features/Home/ui';
import * as s from './style.css';
import { useQuery } from '@tanstack/react-query';
import { ChangeDateToDash, getNextDate, getPrevDate } from 'shared/lib/date';
import { usePatchTodoStateMutation } from 'features/Home/services/home.mutation';
import { useTodoListQuery } from 'features/Home/services/home.query';
import { useAtom } from 'jotai';
import { todoSelectedDateAtom } from 'entities/calendar/contexts/todoDate';

interface TodoItem {
  eventId: number;
  title: string;
  isDone: boolean;
}

const Todo = () => {
  const [date, setDate] = useAtom(todoSelectedDateAtom);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const dashDate = ChangeDateToDash(date);
  const dates = {
    startDate: dashDate,
    endDate: dashDate,
  };

  const todoQuery = useTodoListQuery.getTodoList(dates);

  const { data: todos = [] } = useQuery({
    ...todoQuery,
    enabled: !!dates,
  });

  useEffect(() => {
    setTodoItems(todos);
  }, [todos]);

  const { mutate } = usePatchTodoStateMutation();
  const handleToggle = async (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.eventId === id ? { ...item, isDone: !item.isDone } : item
      )
    );
    mutate(id);
  };

  const handlePrevDate = () => {
    setDate(getPrevDate(date));
  };

  const handleNextDate = () => {
    setDate(getNextDate(date));
  };

  return (
    <div className={s.todoListContainer}>
      <div className={s.todoListHeader}>
        <div className={s.todoListTitle}>해야할 것</div>
        <div className={s.todoListSetDate}>
          <Arrow direction="left" onClick={handlePrevDate} />
          <div className={s.todoListDateTitle}>{date}</div>
          <Arrow direction="right" onClick={handleNextDate} />
        </div>
      </div>
      <div className={s.todoListMain}>
        {todoItems.map((item) => (
          <div
            key={item.eventId}
            className={s.todoListItem}
            onClick={() => handleToggle(item.eventId)}
          >
            {item.isDone ? <TodoCheckedIcon /> : <TodoNormalIcon />}
            <span className={s.todoListItemText}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
