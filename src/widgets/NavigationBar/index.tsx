import { useLocation, useNavigate } from 'react-router-dom';
import * as s from './style.css';
import { Alarm, Calendar, Diary, Mail } from 'widgets/NavigationBar/ui';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      icon: <Calendar />,
      link: '/',
    },
    {
      icon: <Mail />,
      link: '/mail',
    },
    {
      icon: <Diary />,
      link: '/diary',
    },
  ];

  return (
    <nav className={s.container}>
      <div className={s.icons}>
        {menus.map((menu) => (
          <div
            key={menu.link}
            className={`${s.icon} ${location.pathname === menu.link ? s.active : ''}`}
            onClick={() => {
              navigate(menu.link);
            }}
          >
            {menu.icon}
          </div>
        ))}
      </div>
      <div className={s.others}>
        <img
          src="https://image.blip.kr/v1/file/32bf28d0434646cb51561a9bcdfbf46d"
          className={s.profileImg}
        />
        <Alarm />
      </div>
    </nav>
  );
};

export default NavigationBar;
