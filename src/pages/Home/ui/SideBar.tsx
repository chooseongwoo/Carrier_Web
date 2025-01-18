import MiniCalendar from 'features/home-calendar/ui/MiniCalendar';
import ToDoList from 'features/home-todo/ui/ToDoList';
import Category from 'features/home-category/ui/Category';
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
