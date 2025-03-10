import * as s from './style.css';
import CloseIcon from './ui/CloseIcon';
import theme from 'shared/styles/theme.css';
import { useQuery } from '@tanstack/react-query';
import { useTipsQuery } from '../services/home.query';
import { DotLoader } from 'react-spinners';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/bundle';
// @ts-ignore
import 'swiper/css/pagination';

interface SchedulesProps {
  title: string;
  color: string;
  startDate: string;
  endDate: string;
}

interface TodoProps {
  id: number;
  isDone: boolean;
  title: string;
}

interface EmailData {
  date: string;
  from: string;
  gmailId: string;
  isRead: boolean;
  labels: string[];
  subject: string;
  title: string;
  to: string;
}

const TipsModal = ({
  toggleModalClose,
}: {
  toggleModalClose: (modalType: string) => void;
}) => {
  const { data: Tips, isLoading } = useQuery(useTipsQuery.getTips());

  return (
    <div className={s.TipsModal_Background}>
      <div className={s.TipsModal_Container}>
        <div
          className={s.TipsModal_Header}
          style={{ backgroundImage: 'url(/images/HeaderImg.png)' }}
        >
          <div
            className={s.TipsModal_CloseIcon}
            onClick={() => toggleModalClose?.('tips')}
          >
            <CloseIcon />
          </div>
          <div className={s.TipsModal_Title}>오늘의 일정 🗓️</div>
        </div>

        {isLoading ? (
          <div className={s.TipsModal_Loading}>
            <DotLoader
              color={theme.blue[500]}
              size={36}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div className={s.TipsModal_Loading_Text}>
              오늘의 일정을 불러오는 중입니다...
            </div>
          </div>
        ) : (
          <>
            <div className={s.TipsModal_CategoryTodo}>
              <div className={s.TipsModal_Category}>
                {Tips?.schedules?.map((item: SchedulesProps) => {
                  return (
                    <div
                      className={s.Category_Content}
                      style={{ backgroundColor: item?.color }}
                    >
                      <div className={s.Category_Color} />
                      <div
                        className={s.Category_Title}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          color: item?.color,
                        }}
                      >
                        {item.title}

                        {item.startDate && item.endDate && (
                          <div>
                            {new Date(item?.startDate).toLocaleTimeString()} ~{' '}
                            {new Date(item?.endDate).toLocaleTimeString()}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={s.TipsModal_Todo}>
                <ul className={s.Todo_Content}>
                  {Tips?.todos?.map((item: TodoProps) => {
                    return <li className={s.Todo_Title}>{item.title}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className={s.TipsModal_Eamil}>
              <div className={s.Email_Title}>Email ✉️</div>
              <div className={s.Email_Content_Container}>
                {Tips?.mails?.map((item: EmailData) => {
                  return (
                    <div
                      className={s.Email_Content}
                      style={{
                        ...(Tips?.mails.indexOf(item) === 0 && {
                          borderRadius: '12px 12px 0 0',
                          borderTop: `1px solid ${theme.gray[100]}`,
                        }),
                        ...(Tips?.mails.indexOf(item) ===
                          Tips?.mails.length - 1 && {
                          borderRadius: '0 0 12px 12px',
                          borderBottom: `1px solid ${theme.gray[100]}`,
                        }),
                      }}
                    >
                      <div className={s.Email_From}>{item.from}</div>
                      <div className={s.Email_Header}>{item.subject}</div>
                      <div className={s.Email_Date}>
                        {new Date(item?.date).toLocaleTimeString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={s.TipsModal_Tips}>
              <div className={s.Tips_Title}>Tip 💡</div>
              <div className={s.Tips_Content_Container}>
                <Swiper
                  cssMode={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                >
                  {Tips?.tips?.map((item: string[]) => {
                    return <SwiperSlide>{item}</SwiperSlide>;
                  })}
                </Swiper>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TipsModal;
