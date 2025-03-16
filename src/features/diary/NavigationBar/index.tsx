import * as s from './style.css';
import { ArrowBarIcon } from 'features/diary/ui';
import { getNextDate, getPrevDate, NowDatePeriod } from 'shared/lib/date';
import { useMemo } from 'react';
import { useDiaryData } from '../../../shared/hooks/useDiaryData.ts';
import theme from '../../../shared/styles/theme.css.ts';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  emoji: string;
  createDateTime: string;
}

type DiaryMap = Record<string, DiaryEntry>;

interface NavigationBarProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const NavigationBar = ({
  selectedDate,
  setSelectedDate,
}: NavigationBarProps) => {
  const { currentDate, setCurrentDate, days, diaryListData } = useDiaryData();

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

  const handleDateClick = (day: string) => {
    if (day <= NowDatePeriod) {
      setSelectedDate(day);
    }
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
          const isSelected = day === selectedDate;
          const isHoliday = index === 0 || index === 6;
          const hasDiary = !!diaryMap[day];
          const shouldShowNoDiaryText = !hasDiary && day < NowDatePeriod;

          return (
            <div
              key={index}
              className={s.dayContainer}
              onClick={() => handleDateClick(day)}
              style={{ cursor: day > NowDatePeriod ? 'default' : 'pointer' }}
            >
              <div
                className={s.dayBox({
                  selected: isSelected,
                })}
              >
                <div className={s.dayText({ isHoliday, selected: isSelected })}>
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
                ) : shouldShowNoDiaryText ? (
                  <p
                    className={s.dayDiarySummaryText}
                    style={{ color: theme.gray[400] }}
                  >
                    일기 없음
                  </p>
                ) : (
                  <p className={s.dayDiarySummaryText}></p>
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
