const { BrowserWindow } = require('electron');

module.exports = createWindow = (path) => {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  // win.webContents.openDevTools();
  win.loadFile(path);
};
