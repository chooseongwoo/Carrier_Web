import * as s from './style.css';
import Dropdown from '../Dropdown';
import { useEventState, useInputHandlers } from './calendarModal.hook';
import { CalendarEvent } from 'entities/calendar/type';
import { priority } from 'entities/calendar/model';
import { useCategories } from 'entities/calendar/hooks/useCategory';

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

  const { handleInputChange } = useInputHandlers(updateState);

  const handleChangeRepeat = (id: number) =>
    updateState({ selectedRepeatId: id });

  const handleChangeCategory = (id: number) => updateState({ category: id });

  const handleChangePriority = (id: number) =>
    updateState({
      priority: id,
    });

  const handleIsAllday = () =>
    updateState({
      isAllDay: !state.isAllDay,
    });

  const categories = useCategories();

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
              </div>
            )}

          <div className={s.calendarModalItem}>
            <div className={s.calendarModalItemTitle}>반복</div>
            <Dropdown
              name="repeat"
              id={state.selectedRepeatId}
              data={
                state.eventType === 'Schedule'
                  ? [
                      { id: 1, value: 'NONE', name: '없음' },
                      { id: 2, value: 'DAILY', name: '매일' },
                      { id: 3, value: 'WEEKLY', name: '매주' },
                      { id: 4, value: 'MONTHLY', name: '매달' },
                    ]
                  : [
                      { id: 1, value: 'NONE', name: '없음' },
                      { id: 2, value: 'DAILY', name: '매일' },
                      { id: 3, value: 'WEEKLY', name: '매주' },
                      { id: 4, value: 'BIWEEKLY', name: '격주' },
                      { id: 5, value: 'MONTHLY', name: '매달' },
                      { id: 6, value: 'QUARTERLY', name: '3개월마다' },
                      { id: 7, value: 'SEMIANNUALLY', name: '6개월마다' },
                      { id: 8, value: 'YEARLY', name: '매년' },
                    ]
              }
              onChange={handleChangeRepeat}
            />
          </div>

          {state.eventType === 'Schedule' ? (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>카테고리</div>
              <Dropdown
                name="category"
                id={state.category}
                data={categories}
                onChange={handleChangeCategory}
              />
            </div>
          ) : (
            <div className={s.calendarModalItem}>
              <div className={s.calendarModalItemTitle}>우선순위</div>
              <Dropdown
                name="priority"
                id={state.priority}
                data={priority}
                onChange={handleChangePriority}
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
