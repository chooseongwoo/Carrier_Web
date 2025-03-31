import { useMutation } from '@tanstack/react-query';
import { postProceed } from './Proceed.api';

export const usePostProceed = () => {
  return useMutation({ mutationFn: postProceed });
};
