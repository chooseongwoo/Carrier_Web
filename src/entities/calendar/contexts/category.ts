import { atom } from 'jotai';

export const categoriesAtom = atom<
  { id: number; name: string; color: string; active: boolean }[]
>([]);
