const text = document.querySelector("#text");
const author = document.querySelector("#author");
const newRandQuote = document.querySelector("#new-quote");
const tweetQuote = document.querySelector("#tweet-quote");

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const newColor = document.querySelector("body");
const displayQuote = async () => {
  const res = await fetch('https://type.fit/api/quotes');
  const quotes = await res.json();
  const index = Math.floor(Math.random() * quotes.length)
  const result = quotes[index]
  const quote = result.text
  const authors = result.author
  text.innerText = quote;
  author.innerText = "- " + authors;
  tweetQuote.href =`https://twitter.com/intent/tweet?text=${quote} - ${authors}`
}
const getColor = () => {
  const colorIndex = Math.floor(Math.random() * colorArray.length);
  newColor.style.backgroundColor = colorArray[colorIndex]
}
newRandQuote.addEventListener('click', displayQuote)
newRandQuote.addEventListener('click', getColor);
displayQuote()
