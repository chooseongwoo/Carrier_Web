import { atom } from 'jotai';
import { Category } from '../type';

export const categoriesAtom = atom<Category[]>([]);
