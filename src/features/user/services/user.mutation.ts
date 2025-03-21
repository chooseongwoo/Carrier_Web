import { useMutation } from '@tanstack/react-query';
import {
  deleteUser,
  patchUserInfo,
  patchUserPicture,
} from 'features/user/services/user.api';

export const useUpdateUserInfo = () => {
  return useMutation({ mutationFn: patchUserInfo });
};

export const useUpdateUserPictrue = () => {
  return useMutation({ mutationFn: patchUserPicture });
};

export const useUserSecession = () => {
  return useMutation({ mutationFn: deleteUser });
};
