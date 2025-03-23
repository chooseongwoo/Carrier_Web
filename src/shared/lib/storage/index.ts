import { isElectron } from 'shared/lib/isElectron';

type LocalStorageKey = 'accessToken' | 'refreshToken';

export class Storage {
  private static isElectron = isElectron;
  private static electronStore: any = null;

  private static initStore() {
    if (!this.isElectron || this.electronStore) return;

    try {
      const StoreModule = window.require?.('electron-store');
      const Store = StoreModule?.default ?? StoreModule;
      this.electronStore = new Store();
    } catch (e) {
      console.warn('electron-store 초기화 실패:', e);
    }
  }

  private static isWindowAvailable() {
    return typeof window !== 'undefined';
  }

  static getItem(key: LocalStorageKey): string | null {
    this.initStore();

    if (this.isElectron && this.electronStore) {
      return this.electronStore.get(key) ?? null;
    }

    if (this.isWindowAvailable()) {
      return localStorage.getItem(key);
    }

    return null;
  }

  static setItem(key: LocalStorageKey, value: string) {
    this.initStore();

    if (this.isElectron && this.electronStore) {
      this.electronStore.set(key, value);
      return;
    }

    if (this.isWindowAvailable()) {
      localStorage.setItem(key, value);
    }
  }

  static delItem(key: LocalStorageKey) {
    this.initStore();

    if (this.isElectron && this.electronStore) {
      this.electronStore.delete(key);
      return;
    }

    if (this.isWindowAvailable()) {
      localStorage.removeItem(key);
    }
  }

  static clear() {
    this.initStore();

    if (this.isElectron && this.electronStore) {
      this.electronStore.clear();
      return;
    }

    if (this.isWindowAvailable()) {
      localStorage.clear();
    }
  }
}
