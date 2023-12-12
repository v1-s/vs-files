import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios("https://type.fit/api/quotes")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main>
      <h1> Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </main>
  );
}

