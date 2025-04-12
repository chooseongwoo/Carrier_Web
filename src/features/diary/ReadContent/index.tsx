import * as s from './style.css.ts';
import { useQuery } from '@tanstack/react-query';
import { useDiaryDeleteMutation } from 'features/diary/services/diary.mutation.ts';
import { useDiaryQuery } from 'features/diary/services/diary.query.ts';

type ReadContentProps = {
  diaryId: number | null;
  setDiaryId: (id: number | null) => void;
  setMode: (mode: 'create' | 'edit') => void;
};

const ReadContent = ({ diaryId, setDiaryId, setMode }: ReadContentProps) => {
  const {
    data: diaryData,
    isLoading,
    error,
  } = useQuery({
    ...useDiaryQuery.getDiary(diaryId ?? 0),
    enabled: !!diaryId,
  });

  const { mutate: deleteDiary } = useDiaryDeleteMutation();

  if (diaryId === null) return null;
  if (isLoading) return <p></p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;
  if (!diaryData) return <p>일기 데이터를 찾을 수 없습니다.</p>;

  return (
    <div className={s.readDiaryContainer}>
      <div className={s.TitleContainer}>
        <p className={s.diaryTitle}>{diaryData?.title}</p>
      </div>
      <div className={s.contentWrapper}>
        <p className={s.emoji}>{diaryData.emoji}</p>
        {diaryData.content.split('\n').map((item: string, index: number) => (
          <p key={index} className={s.content}>
            {item}
          </p>
        ))}
      </div>
      <div className={s.buttons}>
        <button
          className={s.button({ type: 'modify' })}
          onClick={() => setMode('edit')}
        >
          수정하기
        </button>
        <button
          className={s.button({ type: 'delete' })}
          onClick={() =>
            deleteDiary(diaryId, {
              onSuccess: () => {
                setDiaryId(null);
                alert('일기가 삭제되었습니다.');
              },
            })
          }
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default ReadContent;
