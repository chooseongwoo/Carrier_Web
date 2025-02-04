import Sidebar from 'pages/Mail/ui/Sidebar';
import * as s from './style.css';
import SendModal from 'pages/Mail/ui/SendModal';

const Mail = () => {
  return (
    <div className={s.container}>
      <Sidebar />
      <SendModal />
    </div>
  );
};

export default Mail;
