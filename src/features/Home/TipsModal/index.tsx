import * as s from './style.css';
import CloseIcon from './ui/CloseIcon';
import theme from 'shared/styles/theme.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/bundle';
// @ts-ignore
import 'swiper/css/pagination';

const CategoryData = [
  {
    title: '롤 실버가기',
    color: '#B6A917',
    start: '',
    end: '',
  },
  {
    title: '오징징이들 회의',
    color: '#2E5EFC',
    start: '9:30 AM',
    end: '3:10 PM',
  },
  {
    title: '롤 실버가기',
    color: '#B26C1B',
    start: '9:30 AM',
    end: '3:10 PM',
  },
  {
    title: '롤 실버가기',
    color: '#B14FDE',
    start: '9:30 AM',
    end: '3:10 PM',
  },
  {
    title: '롤 실버가기',
    color: '#15A665',
    start: '9:30 AM',
    end: '3:10 PM',
  },
  {
    title: '롤 실버가기',
    color: '#D63881',
    start: '9:30 AM',
    end: '3:10 PM',
  },
];

const TodoData = [
  {
    title: '조깅하러가기 조깅하러가기 조깅하러가기 조깅하러가기',
  },
  {
    title: '산책시키기',
  },
  {
    title: '베이스 치기',
  },
];

const EmailData = [
  {
    id: 1,
    from: '이민준',
    title:
      '안예성 백엔드 빨리하라고;; 안예성 백엔드 빨리하라고;; 안예성 백엔드 빨리하라고;;',
    date: '2025.06.01',
  },
  {
    id: 2,
    from: '이민준',
    title:
      '추성우 프론트 빨리하라고!! 추성우 프론트 빨리하라고!! 추성우 빨아줘! 추성우 프론트 빨리하라고!!',
    date: '2025.06.01',
  },
  {
    id: 3,
    from: '이민준',
    title:
      '이승현 프론트 빨리하라고... 이승현 프론트 빨리하라고... 이승현 프론트 빨리하라고... 이승현 프론트 빨리하라고...',
    date: '2025.06.01',
  },
  {
    id: 4,
    from: '이민준',
    title:
      '나도 빨리할게 ㅎㅎ 나도 빨리할게 ㅎㅎ 나도 빨리할게 ㅎㅎ 나도 빨리할게 ㅎㅎ',
    date: '2025.06.01',
  },
];

const TipsData = [
  {
    title:
      '오늘은 “오징징이들 회의” 일정이 있고 “롤 실버가기” 일정이 있으므로 “오징징이들 회의”일정을 끝내고 나머지 일정을 끝내는게 좋을 것 같습니다.',
  },
  {
    title:
      '오늘은 “오징징이들 회의” 일정이 있고 “롤 실버가기” 일정이 있으므로 “오징징이들 회의”일정을 끝내고 나머지 일정을 끝내는게 좋을 것 같습니다.',
  },
  {
    title:
      '오늘은 “오징징이들 회의” 일정이 있고 “롤 실버가기” 일정이 있으므로 “오징징이들 회의”일정을 끝내고 나머지 일정을 끝내는게 좋을 것 같습니다.',
  },
];
const TipsModal = () => {
  return (
    <div className={s.TipsModal_Background}>
      <div className={s.TipsModal_Container}>
        <div
          className={s.TipsModal_Header}
          style={{ backgroundImage: 'url(/images/HeaderImg.png)' }}
        >
          <div className={s.TipsModal_CloseIcon}>
            <CloseIcon />
          </div>
          <div className={s.TipsModal_Title}>오늘의 일정 🗓️</div>
        </div>

        <div className={s.TipsModal_CategoryTodo}>
          <div className={s.TipsModal_Category}>
            {CategoryData.map((item) => {
              return (
                <div
                  className={s.Category_Content}
                  style={{ backgroundColor: item.color }}
                >
                  <div className={s.Category_Color} />
                  <div
                    className={s.Category_Title}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      color: item.color,
                    }}
                  >
                    {item.title}

                    {item.start && item.end && (
                      <div>
                        {item?.start} ~ {item?.end}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.TipsModal_Todo}>
            <ul className={s.Todo_Content}>
              {TodoData.map((item) => {
                return <li className={s.Todo_Title}>{item.title}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className={s.TipsModal_Eamil}>
          <div className={s.Email_Title}>Email ✉️</div>
          <div className={s.Email_Content_Container}>
            {EmailData.map((item) => {
              return (
                <div
                  className={s.Email_Content}
                  style={{
                    ...(item.id === 1 && {
                      borderRadius: '12px 12px 0 0',
                      borderTop: `1px solid ${theme.gray[100]}`,
                    }),
                    ...(item.id === EmailData.length && {
                      borderRadius: '0 0 12px 12px',
                      borderBottom: `1px solid ${theme.gray[100]}`,
                    }),
                  }}
                >
                  <div className={s.Email_From}>{item.from}</div>
                  <div className={s.Email_Header}>{item.title}</div>
                  <div className={s.Email_Date}>{item.date}</div>
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
              {TipsData.map((item) => {
                return <SwiperSlide>{item.title}</SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsModal;
