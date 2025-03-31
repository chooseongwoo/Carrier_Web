import { useMutation } from '@tanstack/react-query';
import { postProceed } from './proceed.api';

export const usePostProceed = () => {
  return useMutation({ mutationFn: postProceed });
};
