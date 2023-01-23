const quotes = [
  {
    quote: "The shimmering stars danced in the midnight sky.",
    author: "- Coby Jones",
    image: "/images/img-1.jpg",
  },

  {
    quote: "The quick brown fox jumps over the lazy dog.",
    author: "- Harry Smith ",
    image: "/images/img-2.jpg",
  },

  {
    quote: "Golden leaves rustled in the autumn breeze.",
    author: "- Sally Boop",
    image: "/images/img-3.jpg",
  },

  {
    quote: "The ocean waves whispered secrets to the shore.",
    author: "- Anne Jilly",
    image: "/images/img-4.jpg",
  },

  {
    quote: "A symphony of colors painted the sunset sky.",
    author: "- Howard Burn",
    image: "/images/img-5.jpg",
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

// print properties on page

console.log(obj.quote);
console.log(obj.author);
console.log(obj.image);

quoteOutput.textContent = obj.quote;
authorOutput.textContent = obj.author;

document.querySelector(".container").style.backgroundImage = obj.image;
