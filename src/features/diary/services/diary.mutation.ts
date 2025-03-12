import { deleteDiary, postDiary } from './diary.api.ts';
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

export const useDiaryDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: number) => deleteDiary(String(id)),
  });
};
