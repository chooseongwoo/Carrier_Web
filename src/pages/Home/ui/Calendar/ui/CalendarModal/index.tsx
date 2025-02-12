import * as s from './style.css';
import Dropdown from '../Dropdown';
import useEventState from './calendarModal.hook';
import {
  CalendarEvent,
  ScheduleCategory,
  TodoPriority,
} from 'entities/calendar/type';

interface CalendarModalProps {
  onClose: () => void;
  event?: CalendarEvent;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ onClose, event }) => {
  const {
    eventType,
    setEventType,
    title,
    content,
    selectedRepeat,
    setSelectedRepeat,
    selectedCategory,
    setSelectedCategory,
    selectedPriority,
    setSelectedPriority,
    isAllDay,
    setIsAllDay,
    isInitial,
  } = useEventState({
    event,
  });

  const handleChangeRepeat = (value: string) => setSelectedRepeat(value);

  const handleChangeCategory = (value: string) =>
    setSelectedCategory(value as ScheduleCategory);

  const handleChangePriority = (value: string) =>
    setSelectedPriority(value as TodoPriority);

  const handleIsAllday = () => setIsAllDay((prev) => !prev);

  const switchEventType = (type: 'Schedule' | 'Todo') => {
    setEventType(type);
    if (type === 'Schedule') {
      setSelectedCategory('FIRST');
      setIsAllDay(true);
    } else {
      setSelectedPriority('MIDDLE');
    }
  };

  return (
    <div className={s.calendarModalOverlay} onClick={onClose}>
      <div className={s.calendarModal} onClick={(e) => e.stopPropagation()}>
        {isInitial ? (
          <div className={s.calendarEventButtonLayout}>
            <div
              className={s.calendarEventButton({
                position: 'left',
                isActive: eventType === 'Schedule',
              })}
              onClick={() => switchEventType('Schedule')}
            >
              <div className={s.calendarEventText}>일정</div>
            </div>
            <div
              className={s.calendarEventButton({
                position: 'right',
                isActive: eventType === 'Todo',
              })}
              onClick={() => switchEventType('Todo')}
            >
              <div className={s.calendarEventText}>할 일</div>
            </div>
          </div>
        ) : null}

        <div className={s.calendarModalHeader}>
          <input
            className={s.calendarModalTitle}
            placeholder="새 일정"
            value={title}
            onChange={(e) => handleChangeRepeat(e.target.value)}
          />
          <input
            className={s.calendarModalSubTitle}
            placeholder="메모"
            value={content}
            onChange={(e) => handleChangeRepeat(e.target.value)}
          />
        </div>

        <div className={s.calendarModalBody}>
          {eventType === 'Schedule' && (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>하루 종일</div>
              <div
                className={s.displayBtnLayout({ isActive: isAllDay })}
                onClick={handleIsAllday}
              >
                <div className={s.displayBtnObject} />
              </div>
            </div>
          )}
          {event?.start &&
            event?.end &&
            !isAllDay &&
            eventType === 'Schedule' && (
              <>
                <div className={s.calendarModalItem}>
                  <div className={s.calendarModalItemTitle}>시작</div>
                  <div className={s.calendarModalItemAttribute}>
                    {new Date(event.start).toLocaleString()}
                  </div>
                </div>
                <div className={s.calendarModalItem}>
                  <div className={s.calendarModalItemTitle}>종료</div>
                  <div className={s.calendarModalItemAttribute}>
                    {new Date(event.end).toLocaleString()}
                  </div>
                </div>
              </>
            )}

          <div className={s.calendarModalItem}>
            <div className={s.calendarModalItemTitle}>반복</div>
            <Dropdown
              name="repeat"
              value={selectedRepeat}
              data={
                eventType === 'Schedule'
                  ? [
                      { value: 'NONE', label: '없음' },
                      { value: 'DAILY', label: '매일' },
                      { value: 'WEEKDAYS', label: '매주' },
                      { value: 'WEEKENDS', label: '매달' },
                    ]
                  : [
                      { value: 'NONE', label: '없음' },
                      { value: 'DAILY', label: '매일' },
                      { value: 'WEEKLY', label: '매주' },
                      { value: 'BIWEEKLY', label: '격주' },
                      { value: 'MONTHLY', label: '매달' },
                      { value: 'QUARTERLY', label: '분기' },
                      { value: 'SEMIANNUALLY', label: '반기' },
                      { value: 'ANNUALLY', label: '매년' },
                    ]
              }
              onChange={handleChangeRepeat}
            />
          </div>

          {eventType === 'Schedule' ? (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>카테고리</div>
              <Dropdown
                name="category"
                value={selectedCategory}
                data={[
                  { value: 'FIRST', label: '나의 일정', color: '#3B82F6' },
                  { value: 'SECOND', label: '게임', color: '#22C55E' },
                  { value: 'THIRD', label: '공휴일', color: '#EF4444' },
                ]}
                onChange={handleChangeCategory}
              />
            </div>
          ) : (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>우선순위</div>
              <Dropdown
                name="priority"
                value={selectedPriority}
                data={[
                  { value: 'LOW', label: '낮음' },
                  { value: 'MIDDLE', label: '중간' },
                  { value: 'HIGH', label: '높음' },
                ]}
                onChange={handleChangePriority}
              />
            </div>
          )}
        </div>

        <div className={s.calendarModalFooter}>
          <div className={s.calendarModalLocationPlaceholder}>위치 추가</div>
        </div>

        {isInitial ? (
          <div className={s.calendarModalCreateBtn}>
            <div className={s.calendarModalCreateBtnText}>생성</div>
          </div>
        ) : (
          <div className={s.calendarModalDeleteBtn}>
            <div className={s.calendarModalDeleteBtnText}>삭제</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarModal;
