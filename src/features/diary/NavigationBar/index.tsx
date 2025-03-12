import * as s from './style.css';
import { ArrowBarIcon } from 'features/diary/ui';
import { getNextDate, getPrevDate, NowDatePeriod } from 'shared/lib/date';
import { useMemo, useState } from 'react';
import { useDiaryData } from '../../../shared/hooks/useDiaryData.ts';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  emoji: string;
  createDateTime: string;
}

type DiaryMap = Record<string, DiaryEntry>;

const NavigationBar = () => {
  const { currentDate, setCurrentDate, days, diaryListData } = useDiaryData();
  const [selectedDate, setSelectedDate] = useState(NowDatePeriod);

  const diaryMap = useMemo(() => {
    if (!diaryListData) return {};

    return diaryListData.reduce((acc: DiaryMap, diary: DiaryEntry) => {
      const diaryDate = diary.createDateTime.split('T')[0].replace(/-/g, '.');
      acc[diaryDate] = diary;
      return acc;
    }, {});
  }, [diaryListData]);

  const handlePrevWeek = () => {
    setCurrentDate(getPrevDate(currentDate, 7));
  };

  const handleNextWeek = () => {
    setCurrentDate(getNextDate(currentDate, 7));
  };

  return (
    <div className={s.container}>
      <div className={s.buttonContainer} onClick={handlePrevWeek}>
        <div className={s.buttonBox}>
          <ArrowBarIcon direction="left" />
          <div className={s.buttonText}>저번 주</div>
        </div>
      </div>
      <div className={s.datesContainer}>
        {days.map((day, index) => {
          const dayNumber = day.split('.')[2].replace(/^0+/, '');
          const selectedDay = day === selectedDate;
          const isHoliday = index === 0 || index === 6;
          const calendarToday = day === NowDatePeriod;
          const hasDiary = !!diaryMap[day];

          return (
            <div
              key={index}
              className={s.dayContainer}
              onClick={() => setSelectedDate(day)}
            >
              <div
                className={s.dayBox({
                  selected: selectedDay,
                  today: calendarToday,
                })}
              >
                <div
                  className={s.dayText({ isHoliday, selected: selectedDay })}
                >
                  {dayNumber}
                </div>
              </div>
              <div className={s.dayDairyText({ isWritten: hasDiary })}>
                {hasDiary ? (
                  <div className={s.dayDiarySummary}>
                    <p className={s.dayDiarySummaryEmoji}>
                      {diaryMap[day].emoji}
                    </p>
                    <p className={s.dayDiarySummaryText}>
                      {diaryMap[day].title}
                    </p>
                  </div>
                ) : (
                  <p className={s.dayDiarySummaryText}>일기 없음</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.buttonContainer} onClick={handleNextWeek}>
        <div className={s.buttonBox}>
          <ArrowBarIcon direction="right" />
          <div className={s.buttonText}>다음 주</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
