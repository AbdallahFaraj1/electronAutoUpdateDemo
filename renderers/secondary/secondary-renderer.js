const { ipcRenderer } = window.require('electron');

const button = document.getElementById('talk');
const button2 = document.getElementById('talk2');

button.addEventListener('click', () => {
  ipcRenderer.send(
    'secondary-channel1',
    'Hello from secondary-renderer button1'
  );
});
button2.addEventListener('click', () => {
  ipcRenderer.send(
    'secondary-channel2',
    'Hello from secondary-renderer button2'
  );
});
