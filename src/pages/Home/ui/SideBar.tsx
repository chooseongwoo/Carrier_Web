import MiniCalendar from 'features/Home/MiniCalendar/ui/MiniCalendar';
import ToDoList from 'features/Home/Todo/ui/ToDoList';
import Category from 'features/Home/Category/ui/Category';
import * as s from './style.css';

const SideBar = () => {
  return (
    <aside className={s.container}>
      <MiniCalendar />
      <ToDoList />
      <Category />
    </aside>
  );
};

export default SideBar;
