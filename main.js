const electron = require('electron');
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', function() {
  // Create new window
  mainWindow = new BrowserWindow({});
  // Load HTML into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file',
    slashes: true
  }));

  // Delete Menu
  Menu.setApplicationMenu(null);
})