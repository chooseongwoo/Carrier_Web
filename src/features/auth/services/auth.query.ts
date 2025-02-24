import { queryOptions } from '@tanstack/react-query';
import { getLoginLink } from 'features/auth/services/auth.api';
import { authKeys } from 'features/auth/services/auth.keys';

export const authQuery = {
  loginLink: () =>
    queryOptions({
      queryKey: [authKeys.loginLink],
      queryFn: getLoginLink,
    }),
};
