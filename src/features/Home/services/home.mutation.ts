import { useMutation } from '@tanstack/react-query';
import { PostScheduleReq } from 'entities/calendar/remote';
import { postAddSchedule } from './home.api';

export const usePostScheduleMutation = (scheduleData: PostScheduleReq) => {
  const { mutate: postScheduleMutate, ...restMutation } = useMutation({
    mutationFn: () => postAddSchedule(scheduleData),
    onSuccess: ({ data }) => {
      console.log('일정이 추가되었습니다:', data);
    },
    onError: (error) => {
      console.error('일정 추가 실패:', error);
    },
  });

  return { postScheduleMutate, ...restMutation };
};
