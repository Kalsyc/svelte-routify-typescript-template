const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', () => {
  const mainWindow = new BrowserWindow();
  //mainWindow.loadFile('public/index.html');
  mainWindow.loadURL('http://localhost:8080/');
  mainWindow.webContents.openDevTools();
});
