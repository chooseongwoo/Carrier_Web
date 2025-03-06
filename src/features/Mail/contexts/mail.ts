import { Mail } from 'entities/mail/types';
import { getMailList } from 'features/Mail/services/mail.api';
import { atom } from 'jotai';

export const mailsAtom = atom<Mail[]>([]);

export const updateMailsAtom = atom(null, async (_, set) => {
  const emails = await getMailList();
  set(mailsAtom, emails);
});
