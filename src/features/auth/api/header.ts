import { TOKEN } from 'shared/constants/token.constant';
import { Storage } from 'shared/lib/storage';

export const accessToken = () => ({
  headers: {
    accessToken: Storage.getItem(TOKEN.ACCESS),
  },
});

export const refreshToken = () => ({
  token: Storage.getItem(TOKEN.REFRESH),
});
