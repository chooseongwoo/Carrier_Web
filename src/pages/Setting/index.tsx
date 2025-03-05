import { useEffect, useState } from 'react';
import * as s from './style.css';
import SettingIcon from 'pages/Setting/ui/SettingIcon';
import EditContainer from 'features/Setting/EditContainer';
import LogoutModal from 'features/Setting/LogoutModal';

const Setting = () => {
  const [isDisabled] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(true);
  const toggleModal = () => {
    setIsOpenedModal(true);
  };

  useEffect(() => {
    if (isOpenedModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenedModal]);

  return (
    <main className={s.container}>
      <header className={s.header}>
        <div className={s.userInfos}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GpCMZ_ZhcWCTwy9HAghgSktZHSlXI0gfdQ&s"
            alt="프로필 사진"
            className={s.headerProfileImg}
          />
          <div className={s.textBox}>
            <p className={s.nameText}>백지헌</p>
            <p className={s.emailText}>baekjiheonni@gmail.com</p>
          </div>
        </div>
        <button
          className={s.button({ type: isDisabled ? 'disabled' : 'enabled' })}
        >
          저장하기
        </button>
      </header>
      <div className={s.mainContent}>
        <div className={s.menuList}>
          <div className={s.menu}>
            <SettingIcon />
            <p className={s.menuText}>설정</p>
          </div>
        </div>
        <EditContainer toggleModal={toggleModal} />
      </div>
      {isOpenedModal && <LogoutModal />}
    </main>
  );
};

export default Setting;
