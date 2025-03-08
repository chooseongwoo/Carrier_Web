import SideBar from './ui/Sidebar';
import Calendar from './ui/Calendar';
import * as s from './style.css';
import TipsModal from 'features/Home/TipsModal';

const Home = () => {
  return (
    <main className={s.container}>
      <SideBar />
      <Calendar />
      <TipsModal />
    </main>
  );
};

export default Home;
