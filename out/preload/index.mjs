import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
const api = {};
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(
      "renderer에서 Electron API를 호출하는 데 실패했습니다:",
      error
    );
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
