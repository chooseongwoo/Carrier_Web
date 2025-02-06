import SideBar from './ui/Sidebar';
import * as s from './style.css';
import Content from './ui/Content';

const Mail = () => {
  return (
    <div className={s.container}>
      <SideBar />
      <Content />
    </div>
  );
};

export default Mail;
