import * as s from './style.css';
import NavigationBar from 'features/diary/NavigationBar';
import Content from 'features/diary/Content';
import Chatbar from 'features/diary/Chatbar';
import { useDiaryData } from '../../shared/hooks/useDiaryData.ts';
import { useEffect, useState } from 'react';
import ReadContent from '../../features/diary/ReadContent';
import { NowDatePeriod } from '../../shared/lib/date';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  emoji: string;
  createDateTime: string;
}

const Diary = () => {
  const { diaryListData } = useDiaryData();
  const [selectedDate, setSelectedDate] = useState<string>(NowDatePeriod);
  const [selectedDiaryId, setSelectedDiaryId] = useState<number | null>(null);
  const isPastDate = selectedDate < NowDatePeriod;
  const isNoDiary = selectedDiaryId === null;

  useEffect(() => {
    if (!diaryListData || !selectedDate) return;

    const diaryForSelectedDate = diaryListData.find(
      (diary: DiaryEntry) =>
        diary.createDateTime.split('T')[0].replace(/-/g, '.') === selectedDate
    );

    setSelectedDiaryId(diaryForSelectedDate ? diaryForSelectedDate.id : null);
  }, [diaryListData, selectedDate]);

  return (
    <div className={s.container}>
      <NavigationBar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className={s.main}>
        {isPastDate && isNoDiary ? null : selectedDiaryId ? (
          <ReadContent diaryId={selectedDiaryId} />
        ) : (
          <>
            <Content setIsTodayDiaryExist={() => {}} />
            <Chatbar />
          </>
        )}
      </div>
    </div>
  );
};

export default Diary;
