import { app, shell, BrowserWindow } from 'electron';
import path from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';

function createWindow(): void {
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

app.on('web-contents-created', (_, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
});
