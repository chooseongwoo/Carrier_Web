import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import __cjs_mod__ from 'node:module';
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require2 = __cjs_mod__.createRequire(import.meta.url);
function createWindow() {
  const preloadPath = path.join(__dirname, '../preload/index.mjs');
  const mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: true,
    },
  });
  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.webContents.openDevTools();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });
  const rendererPath =
    is.dev && process.env['ELECTRON_RENDERER_URL']
      ? process.env['ELECTRON_RENDERER_URL']
      : `file://${path.join(app.getAppPath(), 'out/renderer/index.html')}`;
  mainWindow.loadURL(rendererPath);
}
app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.5Jings.Carrier');
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
