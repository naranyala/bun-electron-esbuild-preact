const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = {
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  };
  const browserWindow = new BrowserWindow(win);
  browserWindow.loadFile('index.html');
  return browserWindow;
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
