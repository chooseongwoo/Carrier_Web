import { useEffect } from 'react';
import * as s from './style.css';
import useDropdown from './dropdown.hook.ts';
import DropdownItem from './DropdownItem.tsx';
import { TopdownArrowIcon } from 'features/Home/ui';

type DropdownItemType =
  | { id: number; name: string; color: string; value?: never }
  | { id: number; name: string; value: string; color?: never };

interface DropdownProps {
  id: number;
  name: string;
  data: DropdownItemType[];
  onChange: (id: number, value: string, name: string) => void;
}

const EventDropdown = ({ id, name, data, onChange }: DropdownProps) => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdown();

  const selectedItem = data.find((item) => item.id === id) ?? data[0];
  const selectedLabel = selectedItem ? selectedItem.name : '에러';
  const hasColor = selectedItem.color ? true : false;

  useEffect(() => {
    if (!id || !data.some((item) => item.id === id)) {
      const firstItem = data[0];
      onChange(firstItem.id, firstItem.value ?? firstItem.name, name);
    }
  }, [id, data, onChange, name]);

  return (
    <div>
      <div
        className={s.dropdownBtn({ hasColor: hasColor })}
        onClick={toggleDropdown}
      >
        {hasColor ? (
          <div
            className={s.dropdownColorBox}
            style={{ backgroundColor: selectedItem.color }}
          />
        ) : (
          <div className={s.dropdownBtnText}>{selectedLabel}</div>
        )}
        <TopdownArrowIcon />
      </div>

      {isOpen && (
        <div className={s.dropdownContainer}>
          {data.map((item) => (
            <DropdownItem
              key={item.id}
              item={item}
              isSelected={item.id === id}
              onSelect={(selectedId, selectedValueOrName) => {
                onChange(selectedId, selectedValueOrName, name);
                closeDropdown();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventDropdown;
