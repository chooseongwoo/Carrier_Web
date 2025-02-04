import { useState, useEffect } from 'react';

const STORAGE_KEY = 'selectedMenu';

const useSelectedMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  useEffect(() => {
    const storedMenu = localStorage.getItem(STORAGE_KEY);
    if (storedMenu) {
      setSelectedMenu(storedMenu);
    }
  }, []);

  const selectMenu = (menuLabel: string) => {
    setSelectedMenu(menuLabel);
    localStorage.setItem(STORAGE_KEY, menuLabel);
  };

  return { selectedMenu, selectMenu };
};

export default useSelectedMenu;
