import * as s from './style.css';
import NavigationBar from 'features/diary/NavigationBar';
import Content from 'features/diary/Content';
import Chatbar from 'features/diary/Chatbar';
import { useDiaryData } from '../../shared/hooks/useDiaryData.ts';
import { useEffect, useState } from 'react';
import { NowDatePeriod } from '../../shared/lib/date';
import ReadContent from '../../features/diary/ReadContent';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  emoji: string;
  createDateTime: string;
}

const Diary = () => {
  const { diaryListData } = useDiaryData();
  const [isTodayDiaryExist, setIsTodayDiaryExist] = useState(true);

  useEffect(() => {
    if (!diaryListData) return;

    const todayDiary = diaryListData.some(
      (diary: DiaryEntry) =>
        diary.createDateTime.split('T')[0].replace(/-/g, '.') === NowDatePeriod
    );

    if (todayDiary) {
      setIsTodayDiaryExist(true);
    } else {
      setIsTodayDiaryExist(false);
    }
  }, [diaryListData]);
  return (
    <div className={s.container}>
      <NavigationBar />
      <div className={s.main}>
        {isTodayDiaryExist ? (
          <ReadContent />
        ) : (
          <>
            <Content setIsTodayDiaryExist={setIsTodayDiaryExist} />
            <Chatbar />
          </>
        )}
      </div>
    </div>
  );
};

export default Diary;
