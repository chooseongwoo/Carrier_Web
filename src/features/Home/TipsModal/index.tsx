import { title } from 'process';
import * as s from './style.css';
import CloseIcon from './ui/CloseIcon';

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
            {/* Map 돌 */}

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

            <div
              className={s.Category_Content}
              style={{ backgroundColor: '#B6A917' }}
            >
              <div className={s.Category_Color} />
              <div
                className={s.Category_Title}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#B6A917',
                }}
              >
                롤 실버가기
                <div>9:30 AM ~ 3:10 PM</div>
              </div>
            </div>

            {/* Map 돌 */}
          </div>
          <div className={s.TipsModal_Todo}>
            {/* Map 돌 */}

            {/* Map 돌 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsModal;
