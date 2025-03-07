import { queryOptions } from '@tanstack/react-query';
import { Mail } from 'entities/mail/types';
import { getMailDetail } from 'features/Mail/services/mail.api';
import { mailKeys } from 'features/Mail/services/mail.keys';

export const mailQuery = {
  mailDetail: (gmailId: string) =>
    queryOptions<Mail>({
      queryKey: [mailKeys.mailDetail, gmailId],
      queryFn: () => getMailDetail(gmailId),
    }),
};
