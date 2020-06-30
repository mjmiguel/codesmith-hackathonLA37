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

// pTags.forEach((el) => {
//   const newDiv = document.createElement('p');
//   newDiv.innerHTML = 'NEVER GONNA GIVE YOU UP';
//   el.appendChild(newDiv);
// });

function getInput() {
  let variable = document.getElementById('input_id').value;
  pTags.forEach((el) => {
    const newDiv = document.createElement('p');
    newDiv.innerHTML = variable;
    el.appendChild(newDiv);
  });
}

pTags.forEach((el) => {
  const newDiv = document.createElement('p');
  newDiv.innerHTML = "never gonna give you up";
  el.appendChild(newDiv);
});


// const aTags = document.querySelectorAll('a');

// aTags.forEach((el) => {
//   el.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
// })

