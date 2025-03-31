import { contextBridge, ipcRenderer, shell } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

const api = {};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api);

    contextBridge.exposeInMainWorld('env', {
      isElectron: true,
    });

    contextBridge.exposeInMainWorld('electron', {
      openExternal: (url: string) => {
        shell.openExternal(url);
      },
    });

    contextBridge.exposeInMainWorld('electronAPI', {
      onDeepLink: (callback: (data: any) => void) => {
        ipcRenderer.on('deep-link-received', (_, data) => callback(data));
      },
      notifyReady: () => ipcRenderer.send('renderer-ready'),
      getStore: (key: string) => ipcRenderer.invoke('store:get', key),
      setStore: (key: string, value: any) =>
        ipcRenderer.invoke('store:set', key, value),
      deleteStore: (key: string) => ipcRenderer.invoke('store:delete', key),
      clearStore: () => ipcRenderer.invoke('store:clear'),
    });
  } catch (error) {
    console.error(
      'renderer에서 Electron API를 호출하는 데 실패했습니다:',
      error
    );
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
