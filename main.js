
// listens for change on object property rickEnabled property in local storage
chrome.storage.onChanged.addListener((data) => {
  const pTags = document.querySelectorAll('p');
  // check local storage object.enabled to see state
  if (data.rickEnabled.newValue === true) {
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
  }
  if (data.rickEnabled.newValue === false) {
    const rick = document.querySelectorAll('#rick');
    rick.forEach((el) => {
      el.remove();
    });
  }
});

// fetches json object
fetch('https://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true')
  .then((reponse) => reponse.json())
  .then((jsonData) => {
    let shibeUrls = [...jsonData];
    // listens for change on object property shibeEnabled property in local storage
    chrome.storage.onChanged.addListener(data => {
      // if shibe toggled on
      if (data.shibeEnabled.newValue === true) {
        // add shibe URLS
        if (shibeUrls) {
          const imgList = document.querySelectorAll('img');
          imgList.forEach((el, index) => {
            el.classList.add('shibe');
            el.setAttribute('src', shibeUrls[index]);
          });
        }
      }
    });
  });

// make list of old src tags to put page back together
// tag each changed img with .shibe
const oldSrc = [];
const imgList = document.querySelectorAll('img');
imgList.forEach((el) => {
  if (el.hasAttribute('src')) {
    oldSrc.push(el.getAttribute('src'));
  }
});

// listens for change on object property shibeEnabled property in local storage
chrome.storage.onChanged.addListener(data => {
  // remove shibe URLS from elements with class shibe
  // replace with urls from original img tags
  if (data.shibeEnabled.newValue === false) {
    const shibeImgList = document.querySelectorAll('.shibe');
    shibeImgList.forEach((el, index) => {
      el.setAttribute('src', oldSrc[index]);
      el.classList.remove('shibe');
    });
  }
});
