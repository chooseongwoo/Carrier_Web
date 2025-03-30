import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  patchCategory,
  patchTodoState,
  postCategory,
  postTodo,
  postSchedule,
  patchSchedule,
  deleteSchedule,
  patchTodo,
  deleteTodo,
} from './home.api';
import { homeKeys } from './home.keys';

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.TODO_LIST],
      });
    },
  });
};

export const usePatchTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.TODO_LIST],
      });
    },
  });
};

export const usePatchTodoStateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTodoState,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.TODO_LIST],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.TODO_LIST],
      });
    },
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

export const useCreateScheduleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.SCHEDULE_LIST],
      });
    },
  });
};

export const usePatchScheduleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.SCHEDULE_LIST],
      });
    },
  });
};

export const useDeleteScheduleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [homeKeys.SCHEDULE_LIST],
      });
    },
  });
};
