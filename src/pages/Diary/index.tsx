import * as s from './style.css';
import NavigationBar from 'features/diary/NavigationBar';
import Content from 'features/diary/Content';
import Chatbar from 'features/diary/Chatbar';
import { useDiaryData } from 'features/diary/hooks/useDiaryData.ts';
import { useEffect, useState } from 'react';
import ReadContent from 'features/diary/ReadContent';
import { NowDatePeriod } from 'shared/lib/date';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  emoji: string;
  createDateTime: string;
}

const Diary = () => {
  const { diaryListData, setCurrentDate } = useDiaryData();
  const [selectedDate, setSelectedDate] = useState<string>(NowDatePeriod);
  const [selectedDiaryId, setSelectedDiaryId] = useState<number | null>(null);
  const isPastDate = selectedDate < NowDatePeriod;
  const isNoDiary = selectedDiaryId === null;
  const [mode, setMode] = useState<'create' | 'edit' | 'read'>('read');

  useEffect(() => {
    if (!diaryListData || !selectedDate) return;

    const diaryForSelectedDate = diaryListData.find(
      (diary: DiaryEntry) =>
        diary.createDateTime.split('T')[0].replace(/-/g, '.') === selectedDate
    );

    setSelectedDiaryId(diaryForSelectedDate ? diaryForSelectedDate.id : null);
  }, [diaryListData, selectedDate]);

  useEffect(() => {
    setCurrentDate(selectedDate);
  }, [selectedDate, setCurrentDate]);

  useEffect(() => {
    if (isNoDiary) {
      setMode('create');
    } else {
      setMode('read');
    }
  }, [isNoDiary]);

  return (
    <div className={s.container}>
      <NavigationBar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className={s.main}>
        {isPastDate && isNoDiary ? null : (
          <>
            {mode === 'read' && selectedDiaryId !== null && (
              <ReadContent
                diaryId={selectedDiaryId}
                setDiaryId={setSelectedDiaryId}
                setMode={setMode}
              />
            )}

            {(mode === 'create' || mode === 'edit') && (
              <>
                <Content
                  mode={mode}
                  diaryId={selectedDiaryId ?? undefined}
                  setSelectedDiaryId={setSelectedDiaryId}
                  setMode={setMode}
                />
                <Chatbar />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Diary;
