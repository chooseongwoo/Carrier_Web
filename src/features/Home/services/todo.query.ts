import { queryOptions } from '@tanstack/react-query';
import { getTodos } from './todo.api';

export const todoQuery = {
  getTodo: () =>
    queryOptions({
      queryKey: ['todo'],
      queryFn: getTodos,
    }),
};
