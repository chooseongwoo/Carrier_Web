export {};

declare global {
  interface Window {
    electron: {
      openExternal: (url: string) => void;
    };
    env?: { isElectron: boolean };
    electronAPI: {
      onDeepLink: (cb: (data: any) => void) => void;
      notifyReady: () => void;
      getStore: (key: string) => Promise<any>;
      setStore: (key: string, value: any) => Promise<void>;
      deleteStore: (key: string) => Promise<void>;
      clearStore: () => Promise<void>;
    };
  }
}
