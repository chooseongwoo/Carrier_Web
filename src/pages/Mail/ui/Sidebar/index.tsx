import * as s from './style.css';
import { Arrow } from 'shared/icons';
import { useState } from 'react';
import { Business, Recieved, Save, Sent, Spam, Trash } from 'pages/Mail/ui';

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const sidebarMenu = [
    { title: '임시 보관함', icon: <Save />, label: 'save' },
    { title: '보낸 메일함', icon: <Sent />, label: 'sent' },
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
        <div className={s.category}>
          <Recieved />
          <p className={s.categoryText}>받은 메일함</p>
          <div
            className={`${s.arrowBox} ${isOpened ? s.opened : s.closed}`}
            onClick={() => setIsOpened(!isOpened)}
          >
            <Arrow size={20} direction="right" />
          </div>
        </div>
        <div className={s.subCategories}>
          {isOpened
            ? subMenu.map((menu) => (
                <div className={s.category} key={menu.label}>
                  {menu.icon}
                  <p className={s.categoryText}>{menu.title}</p>
                </div>
              ))
            : null}
        </div>
        {sidebarMenu.map((menu) => (
          <div className={s.category} key={menu.label}>
            {menu.icon}
            <p className={s.categoryText}>{menu.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
