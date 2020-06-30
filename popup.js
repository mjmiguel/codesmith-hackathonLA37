/* eslint-disable prefer-arrow-callback */
let enabled = false; // disabled by default
let myButton = document.getElementById('toggle');

chrome.storage.local.get('enabled', function(data) {
  enabled = !!data.enabled;
  myButton.textContent = enabled ? 'Disable' : 'Enable';
});

myButton.onclick = () => {
  enabled = !enabled;
  myButton.textContent = enabled ? 'Disable' : 'Enable';
  chrome.storage.local.set({enabled:enabled});
};