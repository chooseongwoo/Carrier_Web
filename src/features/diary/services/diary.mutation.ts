import { deleteDiary, postDiary } from './diary.api.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { diaryKeys } from './diary.keys.ts';
import { useDiaryData } from 'features/diary/hooks/useDiaryData.ts';

interface addDiaryReq {
  title: string;
  content: string;
  emoji: string;
}

export const useDiaryAddMutation = (
  setSelectedDiaryId: (id: number) => void
) => {
  const queryClient = useQueryClient();
  const { refetch } = useDiaryData();
  return useMutation({
    mutationFn: (diaryData: addDiaryReq) => postDiary(diaryData),
    onSuccess: (newDiaryId) => {
      queryClient.invalidateQueries({
        queryKey: [diaryKeys.DIARY_LIST],
      });
      setSelectedDiaryId(newDiaryId);
      refetch();
    },
    onError: (error) => {
      alert(`일기 저장에 실패했습니다: ${error.message}`);
    },
  });
};

export const useDiaryDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: number) => deleteDiary(String(id)),
  });
};
