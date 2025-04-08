import { TOKEN } from 'shared/constants';
import { Storage } from 'shared/lib/storage';

export const getRefreshToken = () => Storage.getItem(TOKEN.REFRESH);
