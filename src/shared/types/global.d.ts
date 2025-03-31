export {};

declare global {
  interface Window {
    electron: {
      openExternal: (url: string) => void;
    };
    env?: { isElectron: boolean };
    electronAPI: {
      onDeepLink: (cb: (data: string) => void) => void;
      notifyReady: () => void;
      getStore: <T>(key: string) => Promise<T>;
      setStore: <T>(key: string, value: T) => Promise<void>;
      deleteStore: (key: string) => Promise<void>;
      clearStore: () => Promise<void>;
    };
  }
}
