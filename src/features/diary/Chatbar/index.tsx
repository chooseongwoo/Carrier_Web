import * as s from './style.css';
import { useQuery } from '@tanstack/react-query';
import { useDiaryQuery } from 'features/diary/services/diary.query.ts';
import { NowDateDash } from 'shared/lib/date';
import { useState } from 'react';

const Chatbar = () => {
  const [selectedChats, setSelectedChats] = useState<number[]>([]);
  const {
    data: recommendData,
    refetch,
    isFetching,
    isError,
    isFetched,
  } = useQuery({
    ...useDiaryQuery.getSubject(NowDateDash),
    enabled: false,
  });

  const handleSelect = (index: number) => {
    setSelectedChats((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleRecommendClick = async () => {
    try {
      await refetch();
      setSelectedChats([]);
    } catch {}
  };

  return (
    <div className={s.container}>
      {isError && <div>데이터를 불러오는 데 실패했습니다.</div>}
      {isFetched && recommendData?.recommend?.length === 0 && (
        <div>오늘은 추천드릴 내용이 없습니다!</div>
      )}
      {recommendData?.recommend.map((subject: string, index: number) => (
        <div
          key={index}
          className={s.suggestionList}
          onClick={() => handleSelect(index)}
        >
          <div
            className={`${s.suggestionText} ${
              selectedChats.includes(index) ? s.selectedSuggestionText : ''
            }`}
          >
            {subject}
          </div>
        </div>
      ))}
      <button className={s.suggestionButton} onClick={handleRecommendClick}>
        <div className={s.suggestionButtonText}>
          {isFetching ? '로딩 중' : '일기 주제 추천받기'}
        </div>
      </button>
    </div>
  );
};

export default Chatbar;
