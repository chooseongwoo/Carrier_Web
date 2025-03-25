import { useMutation } from '@tanstack/react-query';
import {
  patchCategory,
  patchTodo,
  postCategory,
  postTodo,
  postSchedule,
  patchSchedule,
  deleteSchedule,
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

export const usePatchScheduleMutation = () => {
  return useMutation({
    mutationFn: patchSchedule,
  });
};

export const useDeleteScheduleMutation = () => {
  return useMutation({
    mutationFn: deleteSchedule,
  });
};
