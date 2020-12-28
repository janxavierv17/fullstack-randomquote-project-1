/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "That is the greatest fallacy, the wisdom of old men. They do not grow wise. They grow careful.",
    source:"Ernest Hemingway",
    citation:"The Quotation Page",
    year:"1899 - 1961",
    tags:"Tag #1"
  },
  {
    quote: "Take the diplomacy out of war and the thing would fall flat in a week.",
    source:"Will Rogers",
    citation:"The Quotation Page",
    year:"1879 - 1935",
    tags:"Tag #2"
  },
  {
    quote: "This is the challenge of writing. You have to be very emotionally engaged in what you’re doing, or it comes out flat. You can’t fake your way through this.",
    source:"Gordon Atkinson",
    citation:"The Quotation Page",
    year:"2004",
    tags:"Tag #3"
  },
  {
    quote: "The only function of economic forecasting is to make astrology look respectable.",
    source:"John Kenneth Galbraith",
    citation:"The Quotation Page",
    year:"1908 - 2006",
    tags:"Tag #4"
  },
  {
    quote: "Cherish each hour of this day for it can never return.",
    source:"Og Mandino",
    citation:"The Quotation Page",
    year:"1923 - 1996",
    tags:"Tag #5"
  },
]

var colors = [
  "#E0BBE4",
  "#957DAD",
  "#D291BC",
  "#770928",
  "#FEC8D8",
  "#FFDFD3",
];
/***
 * `getRandomQuote` function
***/


let getRandomQuote = () => {
  let randomNumber = Math.floor((Math.random() * quotes.length));
  return quotes[randomNumber];
}
/***
 * `printQuote` function
***/
let printQuote = () => {
  let quoteBox = document.getElementById("quote-box")
  let randomQuotes = getRandomQuote();
  let randomNumber = Math.floor((Math.random() * quotes.length));
  let randomCol = colors[randomNumber];
  
  document.body.style.background = randomCol;
  let tags = `
  <p class="quote">${randomQuotes.quote}</p>
  <p class="source">${randomQuotes.source}
  <span class="citation">${randomQuotes.citation}</span>
  <span class="year">${randomQuotes.year}</span></p>
  `
  let html = quoteBox.innerHTML = tags;
  return html;
}

setInterval(()=>{
  printQuote();
}, 15000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
