import { Sidebar, Content } from 'features/Mail';
import * as s from './style.css';
import { useState } from 'react';
import SendModal from 'features/Mail/SendModal';
import useModal from 'shared/hooks/useModal';

const Mail = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className={s.container}>
      <Sidebar />
      <Content toggleModalOpen={setIsModalOpened} />
      {isModalOpened && <SendModal toggleModalOpen={setIsModalOpened} />}
    </div>
  );
};

export default Mail;
