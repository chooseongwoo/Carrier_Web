import { queryOptions } from '@tanstack/react-query';
import { proceedKey } from './proceed.keys';
import { getAudio, getProceed } from './proceed.api';

export const useGetProceed = {
  getProceed: () =>
    queryOptions({
      queryKey: [proceedKey.getProceed, getProceed],
      queryFn: getProceed,
    }),
};

export const useGetAudio = {
  getAudio: (audioSrc: string) =>
    queryOptions({
      queryKey: [proceedKey.getAudio, audioSrc],
      queryFn: () => getAudio(audioSrc),
    }),
};
