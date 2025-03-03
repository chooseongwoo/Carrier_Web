import * as s from './style.css';
import NavigationBar from 'features/diary/NavigationBar';

const Diary = () => {
  return (
    <div className={s.container}>
      <NavigationBar />
    </div>
  );
};

export default Diary;
