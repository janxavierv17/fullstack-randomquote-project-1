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
  },
  {
    quote: "Take the diplomacy out of war and the thing would fall flat in a week.",
    source:"Will Rogers",
    citation:"The Quotation Page",
    year:"1879 - 1935",
  },
  {
    quote: "This is the challenge of writing. You have to be very emotionally engaged in what you’re doing, or it comes out flat. You can’t fake your way through this.",
    source:"Gordon Atkinson",
    citation:"The Quotation Page",
    year:"",
  },
  {
    quote: "The only function of economic forecasting is to make astrology look respectable.",
    source:"John Kenneth Galbraith",
    citation:"The Quotation Page",
    year:"1908 - 2006",
  },
  {
    quote: "Cherish each hour of this day for it can never return.",
    source:"Og Mandino",
    citation:"The Quotation Page",
    year:"1923 - 1996",
  },
  
]
/***
 * `getRandomQuote` function
***/
// console.log(quotes)
let getRandomQuote = (quotesArray) => {
  let randomNumber = Math.floor((Math.random() * 4) + 1);
  return quotesArray[randomNumber];
}

let randomQuotes = getRandomQuote(quotes)
/***
 * `printQuote` function
***/

let printQuote = (randomQuote) => {
  let quoteBox = document.getElementById("quote-box")
  let quote = randomQuote.quote;
  let source = randomQuote.source;
  let citation = randomQuote.citation;
  let year = randomQuote.year

  let tags = `
  <p class="quote">${quote}</p>
  <p class="source">${source}
  <span class="citation">${citation}</span>
  <span class="year">${year}</span></p>
  `

  let html = quoteBox.innerHTML = tags;
  return html;
}

printQuote(randomQuotes)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);