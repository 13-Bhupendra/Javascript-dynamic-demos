const displayQuote = document.getElementById("displayQuote");
const displayAuthor = document.getElementById("displayAuthor");

const newQuoteBtn = document.getElementById("newQuoteBtn")
newQuoteBtn.addEventListener('click' , function () {

    changeQuote(api_url);

})

const tweetBtn = document.getElementById("tweetBtn");
tweetBtn.addEventListener('click' , function () {
    tweet();
});

const api_url = "https://dummyjson.com/quotes/random";
const tweet_api = "https://twitter.com/intent/tweet?text=";

function changeQuote(url){

    fetch(url)
    .then(Response => Response.json())
    .then(data =>{
        console.log(data)

        displayQuote.innerHTML = data.quote;
        displayAuthor.innerHTML = data.author;
    });

}

function tweet(){

    window.open(tweet_api , "Tweet Window" + displayQuote.innerHTML + "<br>" + "~" + displayAuthor.innerHTML  , "width=600 , height=300" );

}
changeQuote(api_url);