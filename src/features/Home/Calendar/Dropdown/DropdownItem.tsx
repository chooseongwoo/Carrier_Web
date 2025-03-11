import * as s from './style.css';
import { useState } from 'react';
import { DropdownCheckIcon } from 'features/Home/ui';

interface DropdownItemProps {
  item: { id: number; name: string; color?: string };
  isSelected: boolean;
  onSelect: (id: number, name: string) => void;
}

const DropdownItem = ({ item, isSelected, onSelect }: DropdownItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={s.dropdownItem({ hovered: isHovered })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(item.id, item.name)}
    >
      <DropdownCheckIcon
        fillColor={isHovered ? '#FFFFFF' : '#323131'}
        style={{ opacity: isSelected ? 1 : 0 }}
      />
      {item.color && (
        <div
          className={s.dropdownColorBox}
          style={{ backgroundColor: item.color }}
        />
      )}
      <div>{item.name}</div>
    </div>
  );
};

export default DropdownItem;
