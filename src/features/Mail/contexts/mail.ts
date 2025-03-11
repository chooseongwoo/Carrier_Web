import { Mail } from 'entities/mail/types';
import { getMailList, patchMails } from 'features/Mail/services/mail.api';
import { atom } from 'jotai';

export const mailsAtom = atom<Mail[]>([]);

export const updateMailsAtom = atom(null, async (_, set) => {
  const updatedMails = await getMailList();
  await patchMails();
  set(mailsAtom, updatedMails);
});

export const selectedMailIdAtom = atom<string | null>(null);
