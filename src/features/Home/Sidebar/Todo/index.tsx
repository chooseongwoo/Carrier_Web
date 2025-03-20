import { useEffect, useState } from 'react';
import { Arrow } from 'shared/icons';
import { TodoNormalIcon, TodoCheckedIcon } from 'features/Home/ui';
import * as s from './style.css';
import { useQueryClient } from '@tanstack/react-query';
import { ChangeDateToDash, getNextDate, getPrevDate } from 'shared/lib/date';
import { usePatchTodoMutation } from 'features/Home/services/home.mutation';
import { useTodoListQuery } from 'features/Home/services/home.query';
import { useAtom } from 'jotai';
import { todoRenderingAtom } from 'entities/calendar/contexts/eventRendering';
import { todoSelectedDateAtom } from 'entities/calendar/contexts/todoDate';

interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

const Todo = () => {
  const queryClient = useQueryClient();
  const [date, setDate] = useAtom(todoSelectedDateAtom);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [todoRendering] = useAtom(todoRenderingAtom);

  const dashDate = ChangeDateToDash(date);
  const dates = {
    startDate: dashDate,
    endDate: dashDate,
  };

  useEffect(() => {
    try {
      const fetchTodoList = async () => {
        const data = await queryClient.fetchQuery(
          useTodoListQuery.getTodoList(dates)
        );
        setTodoItems(data);
      };
      fetchTodoList();
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }, [queryClient, date, todoRendering]);

  const { mutate } = usePatchTodoMutation();
  const handleToggle = async (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
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
            key={item.id}
            className={s.todoListItem}
            onClick={() => handleToggle(item.id)}
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
