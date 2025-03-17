import { atom } from 'jotai';
import { NowDatePeriod } from 'shared/lib/date';

export const todoSelectedDateAtom = atom<string>(NowDatePeriod);
