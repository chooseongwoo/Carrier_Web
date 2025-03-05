import { useMutation } from '@tanstack/react-query';
import {
  patchCategory,
  patchTodo,
  postCategory,
  postTodo,
  postAddSchedule,
} from './home.api';
import { PostScheduleReq } from 'entities/calendar/remote';

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

export const usePostScheduleMutation = (scheduleData: PostScheduleReq) => {
  const { mutate: postScheduleMutate, ...restMutation } = useMutation({
    mutationFn: () => postAddSchedule(scheduleData),
  });

  return { postScheduleMutate, ...restMutation };
};
