import * as s from './style.css.ts';
import { useQuery } from '@tanstack/react-query';
import { useDiaryQuery } from 'features/diary/services/diary.query.ts';

type ReadContentProps = {
  diaryId: number | null;
};

const ReadContent = ({ diaryId }: ReadContentProps) => {
  const {
    data: diaryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['diary', diaryId ? diaryId.toString() : 'null'],
    queryFn: diaryId
      ? useDiaryQuery.getDiary(diaryId).queryFn
      : () => Promise.resolve(null),
    enabled: !!diaryId,
  });

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
        <p className={s.content}>{diaryData.content}</p>
      </div>
    </div>
  );
};

export default ReadContent;
