import { useState } from 'react';
import { Arrow, BtnToDoNormal, BtnToDoChecked } from 'shared/icons';
import * as s from './style.css';

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: '미래랑 산책가기', checked: false },
    { id: 2, text: '하니 산책시키기', checked: true },
    { id: 3, text: '베이스 치기', checked: false },
  ]);

  const handleToggle = (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className={s.ToDoListContainer}>
      <div className={s.ToDoListHeader}>
        <div className={s.ToDoListTitle}>해야할 것</div>
        <div className={s.ToDoListSetDate}>
          <Arrow direction="left" />
          <div className={s.ToDoListDateTitle}>2025.01.07</div>
          <Arrow direction="right" />
        </div>
      </div>
      <div className={s.ToDoListMain}>
        {todoItems.map((item) => (
          <div
            key={item.id}
            className={s.ToDoListItem}
            onClick={() => handleToggle(item.id)}
          >
            {item.checked ? <BtnToDoChecked /> : <BtnToDoNormal />}
            <span className={s.ToDoListItemText}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
