import Sidebar from 'pages/Mail/ui/Sidebar';
import * as s from './style.css';
import Content from './ui/Content';
import { useState } from 'react';

const Mail = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={s.container}>
      <Sidebar />
      <Content modalOpen={isModalOpened} toggleModalOpen={setIsModalOpened} />
    </div>
  );
};

export default Mail;
