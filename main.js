// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log("The color is green.");
//   });
// });

// make list of p tag elements
// loop through elements and change their inner html

// const element = document.querySelector('body');
// console.log('does it work?');
// element.innerHTML = 'some string';

const pTags = document.querySelectorAll('p');

pTags.forEach((el) => {
  const newDiv = document.createElement('p');
  newDiv.innerHTML = 'NEVER GONNA GIVE YOU UP';
  el.appendChild(newDiv);
});
