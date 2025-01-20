import MiniCalendar from 'features/Home/MiniCalendar/ui/MiniCalendar';
import Display from 'features/Home/Display/ui/Display';
import ToDoList from 'features/Home/Todo/ui/ToDoList';
import Category from 'features/Home/Category/ui/Category';
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
