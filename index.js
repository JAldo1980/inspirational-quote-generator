const quotes = [
  {
    quote:
      "Come all you Xeno scum and fallen heretics! Come face the one true might of the universe and wither under the Golden Throne's gaze!",
    author: "- Chaplain Varnus of the Ultramarines",
    image: "images/ultramarine-1.jpeg",
  },
  {
    quote:
      "We follow in the footsteps of Guilliman. As it is written in the Codex, so shall it be.",
    author: "- Marneus Calgar, Chapter Master of the Ultramarines",
    image: "images/ultramarine-2.jpeg",
  },

  {
    quote:
      "The roar of engines, the recoil of cannons. That is where the true joy of battle lies.",
    author: "- Sergeant Antaro Chronus, Ultramarines",
    image: "images/ultramarine-3.webp",
  },

  {
    quote: "A foe without honour is a foe already beaten.",
    author: "- Ancient Helveticus, Ultramarines Honour Guard",
    image: "images/ultramarine-4.webp",
  },

  {
    quote: "Praise the sun that brings the dawn of our final doom.",
    author: "- Saul Invictus, First Captain of the Ultramarines",
    image: "images/ultramarine-5.jpeg",
  },

  {
    quote:
      "The Emperor protects, and having a loaded bolter never hurt, either.",
    author: "- Apothecary Pythol, Ultramarines 2nd Company",
    image: "images/ultramarine-6.jpeg",
  },
];

const wrapper = document.getElementById("wrapper");
const quoteBox = document.getElementById("quote-box");
let quoteOutput = document.getElementById("quote-output");
let authorOutput = document.getElementById("author-output");

// function that randomly changes quote/author & background image

// randomise object
function randomiseObject() {
  let randomObject = Math.floor(Math.random() * quotes.length);
  return quotes[randomObject];
}

let obj = randomiseObject();

let newImage = obj.image;

// print properties on page

quoteOutput.textContent = obj.quote;
authorOutput.textContent = obj.author;

document.querySelector(".container").style.backgroundImage = `url(${newImage})`;
