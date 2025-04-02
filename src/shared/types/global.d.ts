export {};

interface DeepLinkData {
  accessToken?: string;
  refreshToken?: string;
  route?: string;
}

declare global {
  interface Window {
    electron: {
      openExternal: (url: string) => void;
    };
    env?: { isElectron: boolean };
    electronAPI: {
      onDeepLink: (cb: (data: DeepLinkData) => void) => void;
      notifyReady: () => void;
      getStore: <T>(key: string) => Promise<T>;
      setStore: <T>(key: string, value: T) => Promise<void>;
      deleteStore: (key: string) => Promise<void>;
      clearStore: () => Promise<void>;
    };
  }
}
