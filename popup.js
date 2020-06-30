let rickEnabled = false; // disabled by default
let shibeEnabled = false; // disabled by default
let myButton1 = document.getElementById('toggleRick');
let myButton2 = document.getElementById('toggleShibe');

chrome.storage.local.get('rickEnabled', (data) => {
  rickEnabled = !!data.rickEnabled;
  myButton1.textContent = rickEnabled ? 'Disable' : 'Enable';
});

myButton1.onclick = () => {
  rickEnabled = !rickEnabled;
  myButton1.textContent = rickEnabled ? 'Disable' : 'Enable';
  chrome.storage.local.set({ rickEnabled });
};

chrome.storage.local.get('shibeEnabled', (data) => {
  shibeEnabled = !!data.shibeEnabled;
  myButton.textContent = shibeEnabled ? 'Disable' : 'Enable';
});

myButton2.onclick = () => {
  shibeEnabled = !shibeEnabled;
  myButton2.textContent = shibeEnabled ? 'Disable' : 'Enable';
  chrome.storage.local.set({ shibeEnabled });
};