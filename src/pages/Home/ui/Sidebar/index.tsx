import MiniCalendar from 'features/Home/MiniCalendar';
import Display from 'features/Home/Display';
import ToDoList from 'features/Home/Todo';
import Category from 'features/Home/Category';
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
