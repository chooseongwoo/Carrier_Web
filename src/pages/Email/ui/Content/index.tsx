import * as s from './style.css';

const Content = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.mailType}>
          받은메일함
          <div className={s.subTitle}>4개의 메일, 1개 읽지 않음</div>
        </div>
      </header>
    </div>
  );
};

export default Content;
