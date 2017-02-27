// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from 'path';
import url from 'url';
import { app, Menu} from 'electron';
import { devMenuTemplate } from './menu/dev_menu_template';
import { editMenuTemplate } from './menu/edit_menu_template';
import createWindow from './helpers/window';
import express from 'express'
import keymap from '../data/keymap.js'
import {ipcMain as ipc} from 'electron'
import electronLocalshortcut from 'electron-localshortcut'
import debug from 'debug'
import capitalize from 'lodash.capitalize'
const log = debug('main:log')


// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from './env';

var mainWindow;

var setApplicationMenu = function () {
    var menus = [editMenuTemplate];
    if (env.name !== 'production') {
        menus.push(devMenuTemplate);
    }
    Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

var sendKeyCommand = function(cmd) {
  log('sending command:', cmd)
  mainWindow.webContents.send('command', cmd)
}

var registerKeycommands = () => {
  keymap.forEach(keycmd => {
    if(keycmd.enabled) {
      log('registering:', keycmd.keys, keycmd.keys)
      const ret = electronLocalshortcut.register(mainWindow, keycmd.keys, () => {
        sendKeyCommand(keycmd.cmd)
      })
      if (!ret) {
        console.log('registration failed')
      }
      // Check whether a shortcut is registered.
      log(electronLocalshortcut.isRegistered(keycmd.keys))
    }
  })
}

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== 'production') {
    var userDataPath = app.getPath('userData');
    app.setPath('userData', userDataPath + ' (' + env.name + ')');
}



app.on('ready', () => {
    setApplicationMenu();

    mainWindow = createWindow('main', {
        width: 1000,
        height: 600
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app.html'),
        protocol: 'file:',
        slashes: true
    }));

    if (env.name === 'development') {
      mainWindow.openDevTools()
    }

    log('app ready')

    registerKeycommands()


});

app.on('window-all-closed', function () {
    app.quit();
});

let baseServerPath = '.'
let server = null
let serverPort = 8139;
app.startServer = function(baseDir) {
  return Promise((resolve, reject) => {
    const log = debug('StaticServer:log')
    if(server == null) {
      log('trying to start static server')
      try {
        baseServerPath = baseDir
        server = express();
        server.use(express.static(baseServerPath))
        server.listen(serverPort, () => {
          log(' started:', serverPort, baseServerPath)
          resolve({port: serverPort, baseDir: baseServerPath})
        });
      } catch(err) {
        reject(err)
      }
    } else {
      resolve({port: serverPort, baseDir: baseServerPath})
    }
  });
}
app.on('will-quit', () => {
  // Unregister all shortcuts.
  electronLocalshortcut.unregisterAll()
})

app.stopServer = function() {
  log('no need to stop the server...')
}
