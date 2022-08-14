const { ipcMain, app } = require('electron');

ipcMain.on('index-channel1', (e, args) => {
  console.log(args);
  console.log(['app', app]);
});

ipcMain.on('index-channel2', (e, args) => {
  console.log(args);
  console.log('app', app.getName());
});
