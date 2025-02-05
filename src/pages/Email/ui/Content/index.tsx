import TrashcnaIcon from '../TrashcnaIcon';
import WriteIcon from '../WriteIcon';
import * as s from './style.css';

const Content = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.mailType}>
          받은메일함
          <div className={s.subTitle}>4개의 메일, 1개 읽지 않음</div>
        </div>

        <div className={s.mailOption}>
          <div className={s.mailOption_addPlan}>일정으로 추가</div>
          <div className={s.mailOption_write}>
            <WriteIcon />
          </div>
          <div className={s.mailOption_delete}>
            <TrashcnaIcon />
          </div>
        </div>
      </header>

      <main>
        <div></div>
      </main>
    </div>
  );
};

export default Content;
