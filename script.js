
const api_url = "https://dummyjson.com/quotes/random";

async function getQuote(url){
    const resp = await fetch(url);
    var data = await resp.json();
    //console.log(data.quote);
    quote = document.getElementById("quote");
    quote.innerHTML = data.quote;
    author = document.getElementById("author");
    author.innerHTML = data.author;
}
getQuote(api_url);

function tweetQuote(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + " ---- by " + author.innerHTML , "Tweet Window", "width = 600, height=300");
}