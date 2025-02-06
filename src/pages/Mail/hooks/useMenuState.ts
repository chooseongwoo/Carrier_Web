import { useEffect, useState } from 'react';

const STORAGE_KEY_SELECTED_MENU = 'selectedMenu';
const STORAGE_KEY_IS_OPENED = 'menuIsOpened';

const useMenuState = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const storedMenu = localStorage.getItem(STORAGE_KEY_SELECTED_MENU);
    const storedIsOpened = localStorage.getItem(STORAGE_KEY_IS_OPENED);

    if (storedMenu) {
      setSelectedMenu(storedMenu);
    }
    if (storedIsOpened) {
      setIsOpened(storedIsOpened === 'true');
    }
  }, []);

  const selectMenu = (label: string) => {
    setSelectedMenu(label);
    localStorage.setItem(STORAGE_KEY_SELECTED_MENU, label);
  };

  const toggleOpened = () => {
    setIsOpened((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY_IS_OPENED, String(next));
      return next;
    });
  };

  return {
    selectedMenu,
    selectMenu,
    isOpened,
    toggleOpened,
    setIsOpened: (value: boolean) => {
      localStorage.setItem(STORAGE_KEY_IS_OPENED, String(value));
      setIsOpened(value);
    },
  };
};

export default useMenuState;
