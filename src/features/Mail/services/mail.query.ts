import { queryOptions } from '@tanstack/react-query';
import { getMailDetail } from 'features/Mail/services/mail.api';
import { mailKeys } from 'features/Mail/services/mail.keys';

export const mailQuery = {
  mailDetail: (gmailId: string) =>
    queryOptions({
      queryKey: [mailKeys.mailDetail, gmailId],
      queryFn: () => getMailDetail(gmailId),
    }),
};
