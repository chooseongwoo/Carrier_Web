import * as s from './style.css';
import { ArrowBarIcon } from 'features/diary/ui';
import { getNextDate, getPrevDate, NowDatePeriod } from 'shared/lib/date';
import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDiaryListQuery } from '../services/diary.query.ts';

const getWeekDays = (currentDate: string) => {
  const dateObj = new Date(currentDate.replace(/\./g, '-'));
  const dayOfWeek = dateObj.getDay();
  const startOfWeek = new Date(dateObj);
  startOfWeek.setDate(dateObj.getDate() - dayOfWeek);

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day.toISOString().split('T')[0].replace(/-/g, '.');
  });
};

const NavigationBar = () => {
  const [currentDate, setCurrentDate] = useState(NowDatePeriod);
  const [selectedDate, setSelectedDate] = useState(NowDatePeriod);
  const startDateTime = '2025-02-21T12:00:00'; // 일기 조회 리스트 api
  const endDateTime = '2025-03-21T12:00:00';
  const { data: diaryListData } = useQuery({
    ...useDiaryListQuery.getDiaryList(startDateTime, endDateTime),
  });

  const days = useMemo(() => getWeekDays(currentDate), [currentDate]);

  const diaryMap = useMemo(() => {
    if (!diaryListData) return {};

    return diaryListData.reduce((acc: any, diary: any) => {
      const diaryDate = diary.createDateTime.split('T')[0].replace(/-/g, '.'); // YYYY.MM.DD 형식 변환
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
      <div className={s.buttonContainer}>
        <div className={s.buttonBox} onClick={handlePrevWeek}>
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
      <div className={s.buttonContainer}>
        <div className={s.buttonBox} onClick={handleNextWeek}>
          <ArrowBarIcon direction="right" />
          <div className={s.buttonText}>다음 주</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
