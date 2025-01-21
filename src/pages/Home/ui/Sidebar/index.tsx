import MiniCalendar from 'features/Home/MiniCalendar/MiniCalendar';
import Display from 'features/Home/Display/Display';
import ToDoList from 'features/Home/Todo/ToDoList';
import Category from 'features/Home/Category/Category';
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
