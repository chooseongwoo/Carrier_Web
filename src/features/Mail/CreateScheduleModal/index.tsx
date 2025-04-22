/* eslint-disable react-hooks/exhaustive-deps */
import { MailModalProps } from 'entities/mail/types/MailModalProps';
import * as s from './style.css';
import AlertMark from 'features/Mail/ui/AlertMark';
import { CalendarEvent } from 'entities/calendar/type';
import {
  useEventState,
  useInputHandlers,
} from 'features/Home/Calendar/CalendarModal/calendarModal.hook';
import Dropdown from 'features/Home/Calendar/Dropdown';
import { useCallback, useEffect, useState } from 'react';
import LoadingStatus from 'features/Mail/CreateScheduleModal/LoadingStatus';
import { useAtom } from 'jotai';
import { selectedMailIdAtom } from 'features/Mail/contexts/mail';
import { useQuery } from '@tanstack/react-query';
import { mailQuery } from 'features/Mail/services/mail.query';
import { useCreateScheduleMutation } from 'features/Home/services/home.mutation';
import { useCategories } from 'entities/calendar/hooks/useCategory';
import { PRIORITY } from 'entities/calendar/model';
import DateTimePicker from 'shared/components/DateTimePicker';
import { toISOStringKST } from 'shared/lib/date';

const CreateScheduleModal = ({ toggleModalClose }: MailModalProps) => {
  const [gmailId] = useAtom(selectedMailIdAtom);
  const { data: mailToScheduleData, isLoading } = useQuery({
    ...mailQuery.mailToSchedule(gmailId ?? ''),
    enabled: !!gmailId,
  });
  const today = toISOStringKST(new Date());

  const [event, setEvent] = useState<CalendarEvent>({
    type: 'Schedule',
    title: '',
    start: today,
    end: today,
    memo: '',
    location: '',
    isAllDay: true,
    isRepeat: false,
    category: 1,
    allDay: true,
    priority: 1,
    startEditable: true,
    durationEditable: true,
  });

  useEffect(() => {
    if (mailToScheduleData) {
      const startDate = mailToScheduleData?.startDate ?? today;
      const endDate = mailToScheduleData?.endDate ?? today;

      setEvent((prev) => ({
        ...prev,
        title: mailToScheduleData?.title ?? prev.title,
        start: startDate,
        end: endDate,
      }));
    }
  }, [mailToScheduleData]);

  const { state, updateState } = useEventState({ event });
  const { handleInputChange, handleDropdownChange, handleDateTimeChange } =
    useInputHandlers(updateState);

  const categories = useCategories();

  const handleIsAllday = () =>
    updateState({
      isAllDay: !state.isAllDay,
    });

  const scheduleData = {
    title: state.title,
    memo: state.memo,
    allDay: state.isAllDay,
    isRepeat: Boolean(state.repeat),
    categoryId: state.category,
    startDate: state.startDate,
    endDate: Boolean(state.isAllDay) ? state.startDate : state.endDate,
    location: state.location,
  };

  const { mutate: postScheduleMutate } = useCreateScheduleMutation();

  const createEvent = useCallback(() => {
    postScheduleMutate(scheduleData);
    toggleModalClose?.('createSchedule');
  }, [postScheduleMutate, scheduleData, toggleModalClose]);

  return (
    <div className={s.background}>
      {isLoading ? (
        <LoadingStatus toggleModalClose={toggleModalClose} />
      ) : (
        <div className={s.container({ type: 'create' })}>
          <AlertMark />
          <p className={s.explainText}>
            아래 내용을 일정으로 추가하시겠습니까?
          </p>
          <div className={s.calendarModal}>
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
            <div className={s.horizontalLine} />
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
                        onChange={(date) =>
                          handleDateTimeChange('startDate', date)
                        }
                      />
                    </div>
                    <div className={s.calendarModalItem}>
                      <div className={s.calendarModalItemTitle}>종료</div>
                      <DateTimePicker
                        date={state.endDate || state.startDate}
                        minDate={state.startDate}
                        onChange={(date) =>
                          handleDateTimeChange('endDate', date)
                        }
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
            <div className={s.horizontalLine} />
            <div className={s.calendarModalFooter}>
              <input
                name="location"
                className={s.calendarModalLocationTitle}
                placeholder="위치 추가"
                value={state.location || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className={s.horizontalLine} />
            <div className={s.buttons}>
              <button
                className={s.button({ type: 'cancel' })}
                onClick={() => toggleModalClose?.('createSchedule')}
              >
                취소
              </button>
              <button
                className={s.button({ type: 'create' })}
                onClick={createEvent}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateScheduleModal;
