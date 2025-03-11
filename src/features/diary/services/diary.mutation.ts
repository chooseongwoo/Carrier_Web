import { postDiary } from './diary.api.ts';
import { useMutation } from '@tanstack/react-query';

export const useDiaryAddMutation = () => {
  return useMutation({
    mutationFn: (diaryData: {
      title: string;
      content: string;
      emoji: string;
    }) => postDiary(diaryData),
  });
};
