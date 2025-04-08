import { Categories, Display, MiniCalendar, Todo } from 'features/Home/Sidebar';
import * as s from './style.css';

const SideBar = () => {
  return (
    <aside className={s.container}>
      <MiniCalendar />
      <Display />
      <Todo />
      <Categories />
    </aside>
  );
};

export default SideBar;
