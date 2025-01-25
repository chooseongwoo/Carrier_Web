import { queryOptions } from '@tanstack/react-query';
import { getLoginLink } from 'features/auth/services/auth.api';

export const authQuery = {
  loginLink: () =>
    queryOptions({
      queryKey: ['query.loginLink'],
      queryFn: getLoginLink,
    }),
};
