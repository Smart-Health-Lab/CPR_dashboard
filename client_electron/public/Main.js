// import { app, BrowserWindow } from "electron";
// import * as path from "path";
// import * as url from "url";
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true,
    });

  win.loadURL(startUrl);

  win.on("closed", () => {
    app.quit();
  });
  win.webContents.openDevTools();
  ipcMain.on("toggle-debug", (event, arg) => {
    // debug tool toggle
    win.webContents.toggleDevTools();
  });

  ipcMain.on("refresh", (event, arg) => {
    //페이지 갱신
    win.reload();
  });
}

app.on("ready", createWindow);
