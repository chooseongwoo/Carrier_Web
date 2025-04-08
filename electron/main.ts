import { app, shell, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { electronApp, optimizer } from '@electron-toolkit/utils';
import 'dotenv/config';

import Store from 'electron-store';

const store = new Store();

ipcMain.handle('store:get', (_, key) => store.get(key));
ipcMain.handle('store:set', (_, key, value) => store.set(key, value));
ipcMain.handle('store:delete', (_, key) => store.delete(key));
ipcMain.handle('store:clear', () => store.clear());

let mainWindow: BrowserWindow | null = null;
let pendingDeeplinkData: any = null;

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

const getRendererBaseURL = () =>
  isDev && process.env.ELECTRON_RENDERER_URL
    ? process.env.ELECTRON_RENDERER_URL
    : 'https://www.jing5s.kro.kr';

const handleDeepLink = (url: string) => {
  try {
    const parsed = new URL(url.replace('carrier://', 'http://carrier/'));
    const data = {
      accessToken: parsed.searchParams.get('accessToken') || '',
      refreshToken: parsed.searchParams.get('refreshToken') || '',
      isSignUp: parsed.searchParams.get('isSignUp') === 'true',
      route: parsed.pathname || '/',
    };

    if (!mainWindow || mainWindow.isDestroyed()) {
      pendingDeeplinkData = data;
    } else {
      mainWindow.webContents.send('deep-link-received', data);
    }
  } catch (err) {
    console.error('❌ 딥링크 파싱 실패:', err);
  }
};

function createWindow(): void {
  const preloadPath = path.join(__dirname, '../preload/preload.cjs');
  mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow!.maximize();
    mainWindow!.show();

    if (pendingDeeplinkData && !mainWindow!.isDestroyed()) {
      mainWindow!.webContents.send('deep-link-received', pendingDeeplinkData);
      pendingDeeplinkData = null;
    }
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  const startUrl = getRendererBaseURL();
  mainWindow.loadURL(startUrl);
}

app.on('open-url', (_, url) => {
  handleDeepLink(url);
});

app.whenReady().then(() => {
  const deeplinkArg = process.argv.find((arg) => arg.startsWith('carrier://'));
  if (deeplinkArg) {
    handleDeepLink(deeplinkArg);
  }

  const registered = app.setAsDefaultProtocolClient('carrier');
  if (!registered)
    console.warn('딥링크 등록 실패. 앱이 .app으로 실행되고 있는지 확인');

  electronApp.setAppUserModelId('com.5Jings.Carrier');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', (_, argv) => {
    const url = argv.find((arg) => arg.startsWith('carrier://'));
    if (url) {
      handleDeepLink(url);
    }

    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('web-contents-created', (_, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
});

ipcMain.on('renderer-ready', (event) => {
  if (pendingDeeplinkData) {
    event.sender.send('deep-link-received', pendingDeeplinkData);
    pendingDeeplinkData = null;
  }
});
