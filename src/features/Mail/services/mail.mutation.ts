import { useMutation } from '@tanstack/react-query';
import { updateMailsAtom } from 'features/Mail/contexts/mail';
import {
  patchMails,
  postMailsBatchSave,
} from 'features/Mail/services/mail.api';
import { useSetAtom } from 'jotai';

export const useMailMutation = () => {
  const updatedMails = useSetAtom(updateMailsAtom);
  return useMutation({
    mutationFn: patchMails,
    onSuccess: () => {
      updatedMails();
    },
  });
};

export const useMailBatchSave = () => {
  return useMutation({
    mutationFn: postMailsBatchSave,
  });
};
