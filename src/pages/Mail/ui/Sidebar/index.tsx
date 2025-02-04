import * as s from './style.css';
import { Arrow } from 'shared/icons';
import { Business, Recieved, Save, Sent, Spam, Trash } from 'pages/Mail/ui';
import { useMenuState } from 'pages/Mail/hooks';
import theme from 'shared/styles/theme.css';

const Sidebar = () => {
  const { selectedMenu, selectMenu, isOpened, toggleOpened } = useMenuState();

  const sidebarMenu = [
    { title: '임시 보관함', icon: <Save />, label: 'save' },
    {
      title: '보낸 메일함',
      icon: <Sent fill={theme.blue[500]} />,
      label: 'sent',
    },
    { title: '휴지통', icon: <Trash />, label: 'trash' },
  ];

  const subMenu = [
    { title: '업무', icon: <Business />, label: 'business' },
    { title: '스팸', icon: <Spam />, label: 'spam' },
  ];

  return (
    <aside className={s.container}>
      <p className={s.emailText}>chltjdgns1009@gmail.com</p>

      <div className={s.categories}>
        <div
          className={`${s.category} ${selectedMenu === 'recieved' ? s.selected : ''}`}
          onClick={() => selectMenu('recieved')}
        >
          <Recieved />
          <p className={s.categoryText}>받은 메일함</p>

          <div
            className={`${s.arrowBox} ${isOpened ? s.opened : s.closed}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleOpened();
            }}
          >
            <Arrow size={20} direction="right" />
          </div>
        </div>

        {isOpened && (
          <div className={s.subCategories}>
            {subMenu.map((menu) => (
              <div
                className={`${s.category} ${menu.label === selectedMenu ? s.selected : ''}`}
                key={menu.label}
                onClick={() => selectMenu(menu.label)}
              >
                {menu.icon}
                <p className={s.categoryText}>{menu.title}</p>
              </div>
            ))}
          </div>
        )}

        {sidebarMenu.map((menu) => (
          <div
            className={`${s.category} ${menu.label === selectedMenu ? s.selected : ''}`}
            key={menu.label}
            onClick={() => selectMenu(menu.label)}
          >
            {menu.icon}
            <p className={s.categoryText}>{menu.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
