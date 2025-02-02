import { Arrow } from 'shared/icons';
import { CalendarPlus, CalendarSearch } from './ui';
import * as s from './style.css';

const Calendar = () => {
  return (
    <div className={s.CalendarContainer}>
      <div className={s.CalendarHeaderContainer}>
        <div className={s.CalendarHeaderMain}>
          <div className={s.CalendarHeaderPlusBtn}>
            <CalendarPlus />
          </div>
          <div className={s.CalendarHeaderSub}>
            <div className={s.CalendarHeaderBtnLayout}>
              <Arrow size={26} direction="left" />
              <div className={s.CalendarHeaderTodayBtn}>오늘</div>
              <Arrow size={26} direction="right" />
            </div>
            <span className={s.CalendarTitleYear}>2025년</span>
            <span className={s.CalendarTitleMonth}>1월</span>
          </div>
        </div>
        <div className={s.CalendarSearchBar}>
          <CalendarSearch />
          <div className={s.CalendarSearchPlaceholder}>검색</div>
        </div>
      </div>
      <div className={s.CalendarGridContainer}>
        <div className={s.CalendarWeekContainer}>
          <div className={s.CalendarWeek}>
            {/*일월화수목금토를 map으로 돌려서 한줄로 구현 */}
            <div className={s.CalendarWeekText}>일</div>
          </div>
        </div>
        <div className={s.CalendarCellContainer}>
          <div className={s.CalendarCell}>
            {/*하나의 칸 */}
            <div className={s.CalendarCellDay}>
              <div className={s.CalendarCellDayText}>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
