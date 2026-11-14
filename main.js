const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true
  });
  win.loadFile('index.html');
});

app.on('window-all-closed', () => app.quit());
