
// const element = document.querySelector('body');
// console.log('does it work?');
// element.innerHTML = 'some string';
chrome.storage.onChanged.addListener(data => {
  const pTags = document.querySelectorAll('p');
  // check local storage object.enabled to see state
  if (data.enabled.newValue === true) {
    // add P tags to display string
    pTags.forEach((el) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', 'https://i.imgur.com/BTNIDBR.gif?1');
      newImg.setAttribute('id', 'rick');
      const newP = document.createElement('p');
      newP.setAttribute('id', 'rick');
      newP.innerHTML = "never gonna give you up";
      el.appendChild(newP);
      el.appendChild(newImg);
    });
    console.log(data);
  }
  if (data.enabled.newValue === false) {
    const rick = document.querySelectorAll('#rick');
    rick.forEach((el) => {
      el.remove();
    });
  }
});


