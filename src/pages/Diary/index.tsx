import * as s from './style.css';
import NavigationBar from 'features/diary/NavigationBar';
import Content from 'features/diary/Content';

const Diary = () => {
  return (
    <div className={s.container}>
      <NavigationBar />
      <div className={s.main}>
        <Content />
      </div>
    </div>
  );
};

export default Diary;
