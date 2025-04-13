import * as s from './style.css';
import Dropdown from '../Dropdown';
import { useEventState, useInputHandlers } from './calendarModal.hook';
import { CalendarEvent } from 'entities/calendar/type';
import { PRIORITY } from 'entities/calendar/model';
import { useCategories } from 'entities/calendar/hooks/useCategory';
import DateTimePicker from 'shared/components/DateTimePicker';
import { useCallback, useEffect } from 'react';

interface CalendarModalProps {
  onClose: () => void;
  event?: CalendarEvent;
}

const CalendarModal = ({ onClose, event }: CalendarModalProps) => {
  const {
    state,
    updateState,
    switchEventType,
    isInitial,
    createEvent,
    updateEvent,
    deleteEvent,
  } = useEventState({
    event,
  });

  const { handleInputChange, handleDropdownChange, handleDateTimeChange } =
    useInputHandlers(updateState);

  const handleIsAllday = () =>
    updateState({
      isAllDay: !state.isAllDay,
    });
  const categories = useCategories();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Enter') {
        if (isInitial) {
          createEvent();
        } else {
          updateEvent();
        }
        onClose();
      }
    },
    [onClose, isInitial, createEvent, updateEvent]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={s.calendarModalOverlay}
      onClick={() => {
        updateEvent();
        onClose();
      }}
    >
      <div className={s.calendarModal} onClick={(e) => e.stopPropagation()}>
        {isInitial ? (
          <div className={s.calendarEventButtonLayout}>
            <div
              className={s.calendarEventButton({
                position: 'left',
                isActive: state.eventType === 'Schedule',
              })}
              onClick={() => switchEventType('Schedule')}
            >
              <div className={s.calendarEventText}>일정</div>
            </div>
            <div
              className={s.calendarEventButton({
                position: 'right',
                isActive: state.eventType === 'Todo',
              })}
              onClick={() => switchEventType('Todo')}
            >
              <div className={s.calendarEventText}>할 일</div>
            </div>
          </div>
        ) : null}

        <div className={s.calendarModalHeader}>
          <input
            name="title"
            className={s.calendarModalTitle}
            placeholder="새 일정"
            value={state.title}
            onChange={handleInputChange}
          />
          <input
            name="memo"
            className={s.calendarModalSubTitle}
            placeholder="메모"
            value={state.memo || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className={s.calendarModalContour} />
        <div className={s.calendarModalBody}>
          {state.eventType === 'Schedule' && (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>하루 종일</div>
              <div
                className={s.displayBtnLayout({ isActive: state.isAllDay })}
                onClick={handleIsAllday}
              >
                <div className={s.displayBtnObject} />
              </div>
            </div>
          )}
          {event?.start &&
            event?.end &&
            !state.isAllDay &&
            state.eventType === 'Schedule' && (
              <div className={s.calendarModalItemBundle}>
                <div className={s.calendarModalItem}>
                  <div className={s.calendarModalItemTitle}>시작</div>
                  <DateTimePicker
                    date={state.startDate}
                    onChange={(date) => handleDateTimeChange('startDate', date)}
                  />
                </div>
                <div className={s.calendarModalItem}>
                  <div className={s.calendarModalItemTitle}>종료</div>
                  <DateTimePicker
                    date={state.endDate || state.startDate}
                    minDate={state.startDate}
                    onChange={(date) => handleDateTimeChange('endDate', date)}
                  />
                </div>
              </div>
            )}

          <div className={s.calendarModalItem}>
            <div className={s.calendarModalItemTitle}>반복</div>
            <Dropdown
              name="repeat"
              id={state.repeat}
              data={[
                { id: 0, value: 'false', name: '없음' },
                { id: 1, value: 'true', name: '있음' },
              ]}
              onChange={handleDropdownChange}
            />
          </div>

          {state.eventType === 'Schedule' ? (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>카테고리</div>
              <Dropdown
                name="category"
                id={state.category}
                data={categories}
                onChange={handleDropdownChange}
              />
            </div>
          ) : (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>우선순위</div>
              <Dropdown
                name="priority"
                id={state.priority}
                data={PRIORITY}
                onChange={handleDropdownChange}
              />
            </div>
          )}
        </div>
        <div className={s.calendarModalContour} />
        <div className={s.calendarModalFooter}>
          <input
            name="location"
            className={s.calendarModalLocationTitle}
            placeholder="위치 추가"
            value={state.location || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className={s.calendarModalContour} />
        {isInitial ? (
          <div
            className={s.calendarModalCreateBtn}
            onClick={() => {
              createEvent();
              onClose();
            }}
          >
            <div className={s.calendarModalCreateBtnText}>추가</div>
          </div>
        ) : (
          <div
            className={s.calendarModalDeleteBtn}
            onClick={() => {
              deleteEvent();
              onClose();
            }}
          >
            <div className={s.calendarModalDeleteBtnText}>삭제</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarModal;
