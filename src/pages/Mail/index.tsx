import Sidebar from 'pages/Mail/ui/Sidebar';
import SendModal from 'pages/Mail/ui/SendModal';
import * as s from './style.css';
import Content from './ui/Content';

const Mail = () => {
  return (
    <div className={s.container}>
      <Sidebar />
      <SendModal />
      <Content />
    </div>
  );
};

export default Mail;
