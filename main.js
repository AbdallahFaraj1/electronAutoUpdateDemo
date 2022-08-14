const { app, BrowserWindow } = require('electron');
const createWindow = require('./MainProcesses/createWindow');
require('./MainProcesses/ipcMainIndex');
require('./MainProcesses/ipcMainSecondary');

app.whenReady().then(() => {
  createWindow('./renderers/main/index.html');

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
