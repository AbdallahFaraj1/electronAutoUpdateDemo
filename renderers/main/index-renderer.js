const { ipcRenderer } = window.require('electron');

const button = document.getElementById('talk');
const button2 = document.getElementById('talk2');

button.addEventListener('click', () => {
  ipcRenderer.send('index-channel1', 'Hello from index-renderer button1');
});
button2.addEventListener('click', () => {
  ipcRenderer.send('index-channel2', 'Hello from index-renderer button2');
});
