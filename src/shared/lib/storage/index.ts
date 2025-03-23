type LocalStorageKey = 'accessToken' | 'refreshToken';

export class Storage {
  static async getItem(key: LocalStorageKey): Promise<string | null> {
    if (typeof window !== 'undefined' && window.env?.isElectron) {
      return (await window.electronAPI.getStore(key)) ?? null;
    }
    return localStorage.getItem(key);
  }

  static async setItem(key: LocalStorageKey, value: string): Promise<void> {
    if (typeof window !== 'undefined' && window.env?.isElectron) {
      await window.electronAPI.setStore(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  static async delItem(key: LocalStorageKey): Promise<void> {
    if (typeof window !== 'undefined' && window.env?.isElectron) {
      await window.electronAPI.deleteStore(key);
    } else {
      localStorage.removeItem(key);
    }
  }

  static async clear(): Promise<void> {
    if (typeof window !== 'undefined' && window.env?.isElectron) {
      await window.electronAPI.clearStore();
    } else {
      localStorage.clear();
    }
  }
}
