import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

type IpcApiResponse<T = void> = Promise<{
  success: boolean;
  data?: T;
  message?: string;
}>;
const api = {};
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
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
  // @ts-ignore (define in dts)
}
