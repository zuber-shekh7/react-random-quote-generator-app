import React, { useState, useEffect } from "react";
import { Quote } from "./components/Quote";
import quoteApis from "./apis/randomQuotes";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    const response = await quoteApis.get("/random");
    setQuote(response.data);
  };
  return (
    <div>
      {console.log("qoute", quote)}
      <h1>Random Quote Generator</h1>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
