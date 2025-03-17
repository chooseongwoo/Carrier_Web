import { useMutation } from '@tanstack/react-query';
import {
  patchUserInfo,
  patchUserPicture,
} from 'features/user/services/user.api';

export const useUpdateUserInfo = () => {
  return useMutation({ mutationFn: patchUserInfo });
};

export const useUpdateUserPictrue = () => {
  return useMutation({ mutationFn: patchUserPicture });
};
