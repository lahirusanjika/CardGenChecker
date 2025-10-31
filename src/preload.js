const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  generateCards: (data) => ipcRenderer.invoke('generate-cards', data),
  checkCards: (cards) => ipcRenderer.invoke('check-cards', cards)
});