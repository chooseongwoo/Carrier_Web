import { TOKEN } from 'shared/constants';
import { Storage } from 'shared/lib/storage';

export const authorization = () => ({
  headers: {
    accessToken: Storage.getItem(TOKEN.ACCESS),
  },
});

export const refreshToken = () => ({
  token: Storage.getItem(TOKEN.REFRESH),
});
