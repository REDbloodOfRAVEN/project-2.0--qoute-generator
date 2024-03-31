const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

const loader = document.getElementById('loader');

//Show loading 
function showLoading() {     /*loading() {*/
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function hideLoading() {     /*complete() {*/
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote function
function ShowNewQuote() {     /*newQuote() { */
    showLoading();            /*loading();*/

    //Pick random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // checking if there is author, if not -> replacing with "unknown"
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }

    // check the quote's length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    //Set Quote, Hide Loader
    hideLoading();         //complete();

    quoteText.textContent = quote.text;

    // complete();
}

// Tweet Quote   ${quoteText.textContent} - ${authorText.textContent}`;
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl,'_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', ShowNewQuote); //newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on Load
getQuotes();
// loading();