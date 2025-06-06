'use strict';

const elements = {
  quote: document.getElementById('quote'),
  author: document.getElementById('author'),
};

// const quotes = [
//   {
//     quote:
//       'Imagine what our real neighborhoods would be like if each of us offered, as a matter of course, just one kind word to another person.',
//     author: 'Fred Rogers',
//   },

//   {
//     quote:
//       'The ideals which have lighted my way, and time after time have given me new courage to face life cheerfully, have been kindness, beauty, and truth',
//     author: 'Albert Einstein',
//   },

//   {
//     quote:
//       "Sometimes it's better to be kind than to be right. We do not need an intelligent mind that speaks, but a patient heart that listens. You will not be punished for your anger, you will be punished by your anger.",
//     author: 'Gautama Buddha',
//   },
// ];

// function loopThroughQuotes() {
//   let quoteIndex = 0;
//   setInterval(() => {
//     if (quoteIndex < quotes.length) {
//       elements.quote.textContent = quotes[quoteIndex].quote;
//       elements.author.textContent = quotes[quoteIndex].author;
//       quoteIndex++;
//     } else {
//       quoteIndex = 0;
//     }
//   }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);

async function getRandomImage() {
  const client_id = 'ms06Eh8ePLv25510kmne9ENx9AwzexVsQclRKKwmkfc';
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.urls.regular;

    const imgDiv = document.querySelector('.background-img');
    imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    imgDiv.style.backgroundSize = 'cover';
  } catch (error) {
    console.error(error);
  }
}

getRandomImage();
