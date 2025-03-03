import * as s from './style.css';
import { ArrowBarIcon } from 'features/diary/ui';
import { NowDatePeriod, getPrevDate, getNextDate } from 'shared/lib/date';

const NavigationBar = () => {
  const today = NowDatePeriod;
  const baseDate = getPrevDate(today, 2);
  const days = Array.from({ length: 7 }, (_, i) => getNextDate(baseDate, i));

  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <div className={s.buttonBox}>
          <ArrowBarIcon direction="left" />
          <div className={s.buttonText}>저번 주</div>
        </div>
      </div>
      <div className={s.datesContainer}>
        {days.map((day, index) => {
          const dayNumber = day.split('.')[2].replace(/^0+/, '');
          const isToday = day === today;
          const dateObj = new Date(day.replace(/-/g, '.'));
          const isHoliday = [0, 6].includes(dateObj.getDay());

          return (
            <div key={index} className={s.dayContainer}>
              <div className={s.dayBox({ selected: isToday })}>
                <div className={s.dayText({ isHoliday, selected: isToday })}>
                  {dayNumber}
                </div>
              </div>
              <div className={s.dayDairyText({ isWritten: false })}>
                일기 없음
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.buttonContainer}>
        <div className={s.buttonBox}>
          <ArrowBarIcon direction="right" />
          <div className={s.buttonText}>다음 주</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
