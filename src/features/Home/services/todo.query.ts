import { queryOptions } from '@tanstack/react-query';
import { getTodos } from './todo.api';

export const todoQuery = {
  getTodo: (date: string) =>
    queryOptions({
      queryKey: ['todo', date],
      queryFn: () => getTodos(date),
    }),
};
