type LocalStorageKey = 'accessToken' | 'refreshToken';

export class Storage {
  private static isWindowAvailable() {
    return typeof window !== 'undefined';
  }

  static getItem(key: LocalStorageKey): string | null {
    if (this.isWindowAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  static setItem(key: LocalStorageKey, value: string) {
    if (!this.isWindowAvailable()) return;
    localStorage.setItem(key, value);
  }

  static delItem(key: LocalStorageKey) {
    if (!this.isWindowAvailable()) return;
    localStorage.removeItem(key);
  }

  static clear() {
    if (this.isWindowAvailable()) localStorage.clear();
  }
}
