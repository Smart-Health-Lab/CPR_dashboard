const { ipcRenderer } = require("electron");

document.addEventListener("keydown", (event) => {
  if (event.code === 123) {
    ipcRenderer.send("toggle-debug", "an-argument");
  } else if (event.code === 116) {
    ipcRenderer.send("refresh", "an-argument");
  }
});
