import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './style.css';
import { Alarm, Calendar, Diary, Mail } from 'widgets/NavigationBar/ui';
import useUser from 'features/user/hooks/useUser';
import TipsModal from 'features/Home/TipsModal';
import { useState } from 'react';
import { useInterval } from 'react-use';
import useModal from 'shared/hooks/useModal';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();

  const menus = [
    {
      icon: <Calendar />,
      link: '/',
      label: '캘린더',
    },
    {
      icon: <Mail />,
      link: '/mail',
      label: '이메일',
    },
    {
      icon: <Diary />,
      link: '/diary',
      label: '일기',
    },
  ];

  // TipsModal
  const { isOpen, openModal, closeModal } = useModal();
  const userTime = `${user.notificationTime}:00`;

  const getTime = () => {
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  const [nowTime, setNowTime] = useState(getTime);

  useInterval(() => {
    setNowTime(getTime);
    nowTime === userTime && openModal('tips');
  }, 1000);

  return (
    <>
      <nav className={s.container}>
        <div className={s.menus}>
          {menus.map((menu) => (
            <div
              key={menu.link}
              className={`${s.icon} ${location.pathname === menu.link ? s.active : ''}`}
              onClick={() => {
                navigate(menu.link);
              }}
            >
              {menu.icon}
              <p className={s.label}>{menu.label}</p>
            </div>
          ))}
        </div>
        <div className={s.others}>
          <img
            src={user.picture}
            className={s.profileImg}
            alt="프로필 사진"
            onClick={() => {
              navigate('/setting');
            }}
          />
          <Alarm />
        </div>
      </nav>
      {isOpen('tips') && <TipsModal toggleModalClose={closeModal} />}
    </>
  );
};

export default NavigationBar;
