import { useMutation } from '@tanstack/react-query';
import {
  patchCategory,
  patchTodo,
  postCategory,
  postTodo,
  postSchedule,
} from './home.api';

export const useCreateTodoMutation = () => {
  return useMutation({
    mutationFn: postTodo,
  });
};

export const usePatchTodoMutation = () => {
  return useMutation({
    mutationFn: patchTodo,
  });
};

export const usePatchCategoryMutation = () => {
  return useMutation({
    mutationFn: patchCategory,
  });
};

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: postCategory,
  });
};

export const usePostScheduleMutation = () => {
  return useMutation({
    mutationFn: postSchedule,
  });
};
