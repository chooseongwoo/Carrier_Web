import { queryOptions } from '@tanstack/react-query';
import { proceedKey } from './proceed.keys';
import { getProceed } from './proceed.api';

export const useGetProceed = {
  getProceed: () =>
    queryOptions({
      queryKey: [proceedKey.getProceed],
      queryFn: getProceed,
    }),
};
