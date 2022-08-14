const { ipcMain, app } = require('electron');

ipcMain.on('secondary-channel1', (e, args) => {
  console.log(args);
  console.log(['app', app.getDesktopName()]);
});

ipcMain.on('secondary-channel2', (e, args) => {
  console.log(args);
});
