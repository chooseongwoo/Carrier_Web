import { useMutation } from '@tanstack/react-query';
import { postTodo } from './Home.api';

export const useCreateTodoMutation = () => {
  return useMutation({
    mutationFn: postTodo,
  });
};
