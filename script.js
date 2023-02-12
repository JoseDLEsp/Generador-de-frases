// Get Quotes From API

let apiQuotes = [];

//Get elements by id

const authorText = document.getElementById('author')
const quoteText = document.getElementById('quote')
const twitterBtn = document.getElementById('twitter-button')

//Show new quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    console.log(quote);

    if (!quote['author']){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote['author'];
    }

    //Check the quote length
    if(quote['text'].length > 120){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.remove('long-quote')
    }
    document.getElementById('quote').textContent = quote['text'];
    

}

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        // Catch error here
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}
//On load
getQuotes();


