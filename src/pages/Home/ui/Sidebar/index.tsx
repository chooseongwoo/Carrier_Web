import {
  Category,
  Display,
  MiniCalendar,
  ToDoList,
} from 'features/Home/Sidebar';
import * as s from './style.css';

const SideBar = () => {
  return (
    <aside className={s.container}>
      <MiniCalendar />
      <Display />
      <ToDoList />
      <Category />
    </aside>
  );
};

export default SideBar;
