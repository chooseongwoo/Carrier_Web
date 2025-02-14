import SideBar from './ui/Sidebar';
import Calendar from './ui/Calendar';
import * as s from './style.css';

const Home = () => {
  return (
    <main className={s.container}>
      <SideBar />
      <Calendar />
    </main>
  );
};

export default Home;
